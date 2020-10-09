import express from "express";

import gameRoutes from './routes/game'
import categoryRoutes from './routes/category'

const router = express.Router();

router.use('/game', gameRoutes);
router.use('/category', categoryRoutes);

export default router;