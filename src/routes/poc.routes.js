import { Router } from 'express';
import { v2Routes } from '../controllers';
import { v3Routes } from '../controllers';
import runAsyncWrapper from '../utils/runAsyncWrapper';

const pocRoutes = Router();

//! Without Pool
pocRoutes.get('/config', runAsyncWrapper(v2Routes.showDatabase));
pocRoutes.get('/getSchema', runAsyncWrapper(v2Routes.showSchema));
pocRoutes.get('/getDAG', runAsyncWrapper(v2Routes.showDAG));
pocRoutes.get('/getDAGinit', runAsyncWrapper(v2Routes.showDAGinit));
pocRoutes.get('/getMainTask', runAsyncWrapper(v2Routes.showMainTask));
pocRoutes.get('/getState', runAsyncWrapper(v2Routes.showState));
pocRoutes.get('/getTaskMonitoring', runAsyncWrapper(v2Routes.showTaskMonitoring));

//! With Pool
pocRoutes.get('/pool/config', runAsyncWrapper(v3Routes.showDatabasePool));
pocRoutes.get('/pool/getSchema', runAsyncWrapper(v3Routes.showSchemaPool));
pocRoutes.get('/pool/getDAG', runAsyncWrapper(v3Routes.showDAGPool));
pocRoutes.get('/pool/getDAGinit', runAsyncWrapper(v3Routes.showDAGinitPool));
pocRoutes.get('/pool/getMainTask', runAsyncWrapper(v3Routes.showMainTaskPool));
pocRoutes.get('/pool/getState', runAsyncWrapper(v3Routes.showStatePool));
pocRoutes.get('/pool/getTaskMonitoring', runAsyncWrapper(v3Routes.showTaskMonitoringPool));

export default pocRoutes;
