import express from 'express';

const router = express.Router();

router.get('/:gameId', (req, res) => {
  return res.send("hello");
})

export default router;