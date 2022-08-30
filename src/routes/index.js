import { Router } from 'express';
import apiRoutes from './api.routes';
import pocRoutes from './poc.routes';
import sarraRoutes from './sarra.routes';
const router = Router();

router.use(apiRoutes);
router.use('/api', pocRoutes);
router.use('/api', sarraRoutes);

export default router;
