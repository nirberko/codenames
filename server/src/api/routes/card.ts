import express from 'express';
import { createCard } from "../../services/cardService";

const router = express.Router();

router.post('/', async (req, res) => {
  return res.json(await createCard(req.body))
})

export default router;