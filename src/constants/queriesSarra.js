const QueriesSara = {
  showAllPipes: 'show pipes;',
  showPipesOnJSON: (pipeline) => `select system$pipe_status('${pipeline}') ;`,
  showPipline: (pipeline) => `select * from BANK.PUBLIC.${pipeline}`,
  getPipelineDetails: (tab) =>
    `create or replace table BANK.PUBLIC.${tab} as select ph.PIPE_NAME , START_TIME ,END_TIME ,LAST_ALTERED, CREATED from "SNOWFLAKE"."ACCOUNT_USAGE"."PIPE_USAGE_HISTORY" as ph inner join "SNOWFLAKE"."ACCOUNT_USAGE"."PIPES" as p on  ph.PIPE_ID=p.PIPE_ID order by  ph.PIPE_NAME; `,
  showPipeExecuteState: (tab, pipeline) =>
    `create or replace table BANK.PUBLIC.${tab} as select * from (select json_extract_path_text(system$pipe_status('BANK.PUBLIC.${pipeline}'),'executionState') as status ,json_extract_path_text(system$pipe_status('BANK.PUBLIC.${pipeline}'),'lastErrorRecordTimestamp') as last_error_time) ;`,
};

export default QueriesSara;
