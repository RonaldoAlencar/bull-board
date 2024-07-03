import 'dotenv/config';
import express, { Request, Response } from 'express';
import serverAdapter from './config/bull-config';

const app = express();
const port = process.env.APP_PORT || 3232;

app.use('/', serverAdapter.getRouter());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
