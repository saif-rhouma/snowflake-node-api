import Snowflake from '../../snowflake';
import environment from '../../configs/environment';
import snConfig from '../../configs/snowflake';
import Queries from '../../constants/queries';

const showDAGinit = async (req, res) => {
  try {
    const query = Queries.getDAGinit;
    const sn = new Snowflake(environment.nodeEnv, snConfig);
    await sn.connect();
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
    await sn.disconnect();
  } catch (error) {
    res.status(500).json('Error Connection to Snowflake Server');
  }
};
export default showDAGinit;
