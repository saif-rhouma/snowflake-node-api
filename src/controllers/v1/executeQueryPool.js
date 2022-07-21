import SnowflakePool from '../../utils/snowflakePool';

const executeQueryPool = async (req, res) => {
  try {
    const query = req.body.query;
    if (query) {
      const sn = new SnowflakePool();
      const data = await sn.executeQuery(query);
      res.status(200).json(data);
    } else {
      res.status(404).json('No Query To Execute..');
    }
  } catch (error) {
    res.status(500).json('Error Connection to Snowflake Server');
  }
};
export default executeQueryPool;
