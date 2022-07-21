import './configs';
import SnowflakePool from './utils/snowflakePool';

(async () => {
  try {
    new SnowflakePool();
    const App = require('./app').default;
    const app = new App();
    app.listen();
  } catch (error) {
    console.error('Something went wrong when initializing the app:\n', error.stack);
  }
})();
