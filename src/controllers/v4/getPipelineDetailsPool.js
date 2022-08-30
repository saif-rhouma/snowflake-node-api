import QueriesSara from '../../constants/queriesSarra';
import { compareByStartTime } from '../../helpers/sortCompare';
import getUniqueListBy from '../../helpers/uniqueListBy';
import SnowflakePool from '../../utils/snowflakePool';

const getPipelineDetailsPool = async (req, res) => {
  try {
    const query = QueriesSara.getPipelineDetails('pipe_test');
    const sn = new SnowflakePool();
    const data = await sn.executeQueryRaw(query);

    if (data[0].status.indexOf('successfully') !== -1) {
      const showPiplineHistorieQuery = QueriesSara.showPipline('pipe_test');
      const result = await sn.executeQueryRaw(showPiplineHistorieQuery);
      const finalResult = getUniqueListBy(result.sort(compareByStartTime), 'PIPE_NAME');
      res.status(200).json(finalResult);
    } else {
      res.status(400).json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Error Connection to Snowflake Server');
  }
};

export default getPipelineDetailsPool;
