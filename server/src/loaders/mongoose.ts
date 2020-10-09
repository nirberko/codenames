import mongoose from 'mongoose';
import { Router } from "express";
import config from "../lib/config";

export default async ({ app }: { app: Router }) => {
  const connection = await mongoose.connect(config.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser   : true
  });

  app.get('/db-status', (req, res) => {
    if (connection.connection.readyState) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });

  mongoose.set('useFindAndModify', false);

  return connection.connection.db;
}