import snowflake from 'snowflake-sdk';

class Snowflake {
  constructor(environment, snConfig) {
    this.environment = environment;
    this.snConfig = snConfig;
    this.isTestEnvironment = this.environment === 'test';
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
        this.connection = snowflake.createConnection(connectionServer);
        if (this.connection) {
          this.connection.connect((err, conn) => {
            if (err) {
              reject(err);
            } else {
              console.log(`Connected Snowflake Id: ${conn.getId()}`);
              resolve(conn);
            }
          });
        }
      } catch (error) {
        reject(error);
      }
    }).catch(() => {});
  }

  async executeQuery(query, logging = true) {
    return new Promise((resolve, reject) => {
      try {
        this.connection.execute({
          sqlText: query,
          // streamResult: true,
          complete: (err, statement, _rows) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              const rawResults = [];
              for (const row of _rows) {
                rawResults.push(row.V);
              }
              resolve(rawResults);
              if (logging) {
                console.log('Query id: ', statement.getStatementId());
                console.log('Query Text:\n ', query);
                console.log('Successfully executed Statement ');
                // console.log('Successfully executed statement: ' + statement.getStatus);
              }
            }
          },
        });
      } catch (error) {
        reject(error);
      }
    }).catch((error) => {
      return error;
    });
  }

  async executeQueryRaw(query, logging = true) {
    return new Promise((resolve, reject) => {
      try {
        this.connection.execute({
          sqlText: query,
          // streamResult: true,
          complete: (err, statement, _rows) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(_rows);
              if (logging) {
                console.log('Query id: ', statement.getStatementId());
                console.log('Query Text:\n ', query);
                console.log('Successfully executed Statement ');
                // console.log('Successfully executed statement: ' + statement.getStatus);
              }
            }
          },
        });
      } catch (error) {
        reject(error);
      }
    }).catch((error) => {
      return error;
    });
  }

  async disconnect() {
    return new Promise((resolve, reject) => {
      try {
        this.connection.destroy((err, conn) => {
          if (err) {
            console.error('Unable to destroy: ' + err.message);
            reject(err);
          } else {
            console.log('Successfully Destroyed Connection to Snowflake.');
            resolve(conn);
          }
        });
      } catch (error) {
        reject(error);
      }
    }).catch(() => {});
  }
}

export default Snowflake;
