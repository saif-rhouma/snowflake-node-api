const Queries = {
  getConfig: 'show databases;',
  getSchema: (database) => `show SCHEMAS in ${database}`,
  getDAG: (database, schema, taskName) =>
    `select * from table (${database}.information_schema.task_dependents(task_name =>'${database}.${schema}.${taskName}', recursive => true));`,
  getDAGinit: `select * from table (test.information_schema.task_dependents(task_name =>'TEST.PUBLIC.TEST_TASK', recursive => true));`,
  getMainTask: 'select  DISTINCT ROOT_TASK_NAME  from snowflake.account_usage.complete_task_graphs  ;',
  getState: 'select  DISTINCT ROOT_TASK_NAME  from snowflake.account_usage.complete_task_graphs;',
  getTaskMonitoring:
    'select name,count (name) as nameCnt, state,TO_DATE(COMPLETED_TIME) as date from SNOWFLAKE.ACCOUNT_USAGE.TASK_HISTORY group by name,state,TO_DATE(COMPLETED_TIME)',
};

export default Queries;
