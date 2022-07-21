import './configs';
import Snowflake from './snowflake';
import environment from './configs/environment';
import snConfig from './configs/snowflake';

(async () => {
  try {
    const sn = new Snowflake(environment.nodeEnv, snConfig);
    await sn.connect();
    // const data = await sn.executeQuery('select * from SNOWFLAKE_SAMPLE_DATA.WEATHER.DAILY_14_TOTAL Limit 10;');
    // for (let index = 0; index < data.length; index++) {
    //   const element = data[index];
    //   console.log(element);
    // }
  } catch (error) {
    console.error('Something went wrong when initializing the app:\n', error.stack);
  }
})();
