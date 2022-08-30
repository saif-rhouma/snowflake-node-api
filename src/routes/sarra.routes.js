import { Router } from 'express';
import { v4Routes } from '../controllers';
import runAsyncWrapper from '../utils/runAsyncWrapper';

const sarraRoutes = Router();

//! With Pool
sarraRoutes.get('/pool/showAllPipesPool', runAsyncWrapper(v4Routes.showAllPipesPool));
sarraRoutes.get('/pool/getPipelineDetails', runAsyncWrapper(v4Routes.getPipelineDetailsPool));
sarraRoutes.get('/pool/showPipesExecuteStatePoll', runAsyncWrapper(v4Routes.showPipesExecuteStatePoll));
sarraRoutes.get('/pool/showFinalResultPool', runAsyncWrapper(v4Routes.showFinalResultPool));

export default sarraRoutes;
