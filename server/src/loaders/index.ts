import colors from 'colors';
import { Express } from "express";

import mongooseLoader from './mongoose';
import expressLoader from './express';

interface LoadParams {
  loader: any;
  name: string;
  [k: string]: any
}

const load = async ({ loader, name, ...data }: LoadParams) => {
  try {
    console.group(colors.green(`- ${name} initialized successfully`));
    console.groupEnd();
    return await loader({ ...data });
  } catch (err) {
    console.group(colors.red(`- error during ${name} initializing!!`));
    console.log(colors.red(err));
    console.groupEnd();
  }
};

export default async ({ expressApp }: { expressApp: Express }) => {
  console.group(`[Loaders] Starting...`);

  await load({ loader: mongooseLoader, name: 'MongoDB', app: expressApp });
  await load({ loader: expressLoader, name: 'Express', app: expressApp });

  console.groupEnd();
  console.log(`[Loader] Finished`);
}