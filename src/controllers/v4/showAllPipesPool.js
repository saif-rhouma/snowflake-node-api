import QueriesSara from '../../constants/queriesSarra';
import SnowflakePool from '../../utils/snowflakePool';
const showAllPipesPool = async (req, res) => {
  try {
    const query = QueriesSara.showAllPipes;
    const sn = new SnowflakePool();
    const data = await sn.executeQueryRaw(query);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error Connection to Snowflake Server');
  }
};

export default showAllPipesPool;
