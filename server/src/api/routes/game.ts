import express from 'express';
import { createGame, getGameById } from "../../services/gameService";

const router = express.Router();

router.get('/', async (req, res) => {
  return res.send(await createGame());
})

router.get('/:gameId', async (req, res) => {
  return res.json(await getGameById(req.params.gameId));
})

export default router;