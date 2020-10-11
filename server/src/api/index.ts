import express from "express";

import gameRoutes from './routes/game'
import categoryRoutes from './routes/category'
import cardRoutes from './routes/card'

const router = express.Router();

router.use('/game', gameRoutes);
router.use('/category', categoryRoutes);
router.use('/card', cardRoutes);

export default router;