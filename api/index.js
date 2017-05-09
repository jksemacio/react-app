import express from 'express';

import data from '../src/heroesName';

const router = express.Router();

router.get('/heroes', (req, res) => {
  res.send({ data: data.heroes });
});

export default router;
