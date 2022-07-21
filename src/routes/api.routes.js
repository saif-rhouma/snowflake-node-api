import { Router } from 'express';
import { v1Routes } from '../controllers';
import runAsyncWrapper from '../utils/runAsyncWrapper';

const apiRoutes = Router();

apiRoutes.get('/', runAsyncWrapper(v1Routes.welcome));
apiRoutes.post('/', runAsyncWrapper(v1Routes.executeQuery));
apiRoutes.post('/pool', runAsyncWrapper(v1Routes.executeQueryPool));

export default apiRoutes;
