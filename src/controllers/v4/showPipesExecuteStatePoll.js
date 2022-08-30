import QueriesSara from '../../constants/queriesSarra';
import SnowflakePool from '../../utils/snowflakePool';
const showPipesExecuteStatePoll = async (req, res) => {
  try {
    const query = QueriesSara.showAllPipes;
    const sn = new SnowflakePool();
    const data = await sn.executeQueryRaw(query);
    const arrayResult = [];
    for (const pipe of data) {
      const query = QueriesSara.showPipeExecuteState('pipe_test1', pipe.name);
      const result = await sn.executeQueryRaw(query);
      if (result[0].status.indexOf('successfully') !== -1) {
        const showPiplineHistorieQuery = QueriesSara.showPipline('pipe_test1');
        const row = await sn.executeQueryRaw(showPiplineHistorieQuery);
        arrayResult.push(row[0]);
      }
    }
    res.status(200).json(arrayResult);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error Connection to Snowflake Server');
  }
};

export default showPipesExecuteStatePoll;
