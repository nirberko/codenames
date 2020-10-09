import express from "express";

import gameRoutes from './routes/game.routes'

const router = express.Router();

router.use('/game', gameRoutes);

export default router;