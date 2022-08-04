import Snowflake from '../../snowflake';
import environment from '../../configs/environment';
import snConfig from '../../configs/snowflake';
import Queries from '../../constants/queries';

const showDatabase = async (req, res) => {
  try {
    const query = Queries.getConfig;
    const sn = new Snowflake(environment.nodeEnv, snConfig);
    await sn.connect();
    const data = await sn.executeQueryRaw(query);
    const result = data.map((elem) => {
      return { DB_name: elem.name };
    });
    res.status(200).json(result);
    await sn.disconnect();
  } catch (error) {
    res.status(500).json('Error Connection to Snowflake Server');
  }
};
export default showDatabase;
