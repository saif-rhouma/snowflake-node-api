import Snowflake from '../../snowflake';
import environment from '../../configs/environment';
import snConfig from '../../configs/snowflake';
import Queries from '../../constants/queries';

const showMainTask = async (req, res) => {
  try {
    const query = Queries.getMainTask;
    const sn = new Snowflake(environment.nodeEnv, snConfig);
    await sn.connect();
    const data = await sn.executeQueryRaw(query);
    res.status(200).json(data);
    await sn.disconnect();
  } catch (error) {
    res.status(500).json('Error Connection to Snowflake Server');
  }
};
export default showMainTask;
