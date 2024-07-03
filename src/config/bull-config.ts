import 'dotenv/config';
import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import { Queue } from 'bullmq';
import { BullAdapter } from '@bull-board/api/bullAdapter';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/');
const newsQueue = new Queue('news', {
  connection: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
  },
});

createBullBoard({
  queues: [new BullAdapter(newsQueue as any)],
  serverAdapter,
});

export default serverAdapter;
