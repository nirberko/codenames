import { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default async ({ app }: { app: Router }) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}