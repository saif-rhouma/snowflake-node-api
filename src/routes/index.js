import { Router } from 'express';
import apiRoutes from './api.routes';
import pocRoutes from './poc.routes';
const router = Router();

router.use(apiRoutes);
router.use(pocRoutes);

export default router;
