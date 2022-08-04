import Queries from '../../constants/queries';
import SnowflakePool from '../../utils/snowflakePool';

const showDAGPool = async (req, res) => {
  try {
    const query = Queries.getDAG(req.body.database, req.body.schema, req.body.task_name);
    const sn = new SnowflakePool();
    const data = await sn.executeQueryRaw(query);
    const result = data.map((elem) => {
      return {
        task_name: elem.NAME,
        predecesseur: [
          ...elem.PREDECESSORS.map((elem2) =>
            elem2.replace(elem.DATABASE_NAME + '.', '').replace(elem.SCHEMA_NAME + '.', '')
          ),
        ],
      };
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error Connection to Snowflake Server');
  }
};
export default showDAGPool;
