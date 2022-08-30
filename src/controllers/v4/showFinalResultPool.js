import QueriesSara from '../../constants/queriesSarra';
import { compareByStartTime } from '../../helpers/sortCompare';
import getUniqueListBy from '../../helpers/uniqueListBy';
import SnowflakePool from '../../utils/snowflakePool';

const showFinalResultPool = async (req, res) => {
  try {
    const query = QueriesSara.getPipelineDetails('pipe_test');
    const sn = new SnowflakePool();
    const data = await sn.executeQueryRaw(query);

    if (data[0].status.indexOf('successfully') !== -1) {
      const showPiplineHistorieQuery = QueriesSara.showPipline('pipe_test');
      const result = await sn.executeQueryRaw(showPiplineHistorieQuery);
      const finalResult = getUniqueListBy(result.sort(compareByStartTime), 'PIPE_NAME');

      for (let index = 0; index < finalResult.length; index++) {
        const query = QueriesSara.showPipeExecuteState('pipe_test1', finalResult[index].PIPE_NAME);
        const result = await sn.executeQueryRaw(query);
        if (result[0].status.indexOf('successfully') !== -1) {
          const showPiplineHistorieQuery = QueriesSara.showPipline('pipe_test1');
          const row = await sn.executeQueryRaw(showPiplineHistorieQuery);
          finalResult[index] = { ...finalResult[index], ...row[0] };
        }
      }
      res.status(200).json(finalResult);
    } else {
      res.status(400).json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Error Connection to Snowflake Server');
  }
};
export default showFinalResultPool;
