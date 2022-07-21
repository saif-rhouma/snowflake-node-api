import environment from '../configs/environment';
import snConfig from '../configs/snowflake';
import Snowflake from '../snowflake';

class SnowflakePool {
  constructor() {
    if (!SnowflakePool.instance) {
      SnowflakePool.instance = this;
    }
    this.sn = new Snowflake(environment.nodeEnv, snConfig);
    (async () => await this.sn.connect())();
    return SnowflakePool.instance;
  }

  async executeQuery(query, logging = true) {
    return await this.sn.executeQuery(query, logging);
  }
  async destroy() {
    return await this.sn.disconnect();
  }
}

export default SnowflakePool;
