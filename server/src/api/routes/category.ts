import express from 'express';
import { createCategory } from "../../services/categoryService";

const router = express.Router();

router.post('/', async (req, res) => {
  return res.json(await createCategory(req.body))
})

export default router;