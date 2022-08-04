import Queries from '../../constants/queries';
import SnowflakePool from '../../utils/snowflakePool';

const showDatabasePool = async (req, res) => {
  try {
    const query = Queries.getConfig;
    const sn = new SnowflakePool();
    const data = await sn.executeQueryRaw(query);
    const result = data.map((elem) => {
      return { DB_name: elem.name };
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error Connection to Snowflake Server');
  }
};
export default showDatabasePool;
