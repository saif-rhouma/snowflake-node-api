import Queries from '../../constants/queries';
import SnowflakePool from '../../utils/snowflakePool';

const showTaskMonitoringPool = async (req, res) => {
  try {
    const query = Queries.getTaskMonitoring;
    const sn = new SnowflakePool();
    const data = await sn.executeQueryRaw(query);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error Connection to Snowflake Server');
  }
};
export default showTaskMonitoringPool;
