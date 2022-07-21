import Snowflake from '../../snowflake';
import environment from '../../configs/environment';
import snConfig from '../../configs/snowflake';

const executeQuery = async (req, res) => {
  try {
    const query = req.body.query;
    if (query) {
      const sn = new Snowflake(environment.nodeEnv, snConfig);
      await sn.connect();
      const data = await sn.executeQuery(query);
      console.log(data);
      await sn.disconnect();
      res.status(200).json(data);
    } else {
      res.status(404).json('No Query To Execute..');
    }
  } catch (error) {
    res.status(500).json('Error Connection to Snowflake Server');
  }
};
export default executeQuery;
