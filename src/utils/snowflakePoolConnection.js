import snowflake from 'snowflake-sdk';

class SnowflakePoolConnection {
  constructor(environment, snConfig) {
    if (!SnowflakePoolConnection.instance) {
      this.environment = environment;
      this.snConfig = snConfig;
      this.isTestEnvironment = this.environment === 'test';
      SnowflakePoolConnection.instance = this;
    }
    return SnowflakePoolConnection.instance;
  }
  #getConnection() {
    const { account, username, password, region } = this.snConfig[this.environment];
    return { account: account, username: username, password: password, region: region };
  }
  async connect() {
    const connectionServer = this.#getConnection();
    snowflake.configure({ ocspFailOpen: false, logLevel: 'DEBUG', insecureConnect: true });
    return new Promise((resolve, reject) => {
      try {
        this.connectionPool = snowflake.createPool(connectionServer, {
          max: 10,
          min: 0,
        });
        resolve(this.connectionPool);
      } catch (error) {
        reject(error);
      }
    }).catch(() => {});
  }
  async executeQuery(query, logging = true) {
    return new Promise((resolve, reject) => {
      try {
        this.connectionPool.use(async (clientConnection) => {
          const statement = await clientConnection.execute({
            sqlText: query,
            complete: function (err, stmt, rows) {
              const stream = stmt.streamRows();
              stream.on('data', function (row) {
                if (logging) {
                  console.log(row);
                }
                resolve(row);
              });
              stream.on('end', function (row) {
                if (logging) {
                  console.log('All rows consumed');
                }
              });
            },
          });
        });
      } catch (error) {
        reject(error);
      }
    }).catch((error) => {
      return error;
    });
  }
}

export default SnowflakePoolConnection;
