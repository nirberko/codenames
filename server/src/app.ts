import express from "express";

import loaders from './loaders';
import api from './api';

export const app = express();

(async () => {
  await loaders({ expressApp: app })

  app.use(api);
})()