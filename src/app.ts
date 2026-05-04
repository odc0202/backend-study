import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import pingRouter from './routes/ping.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', pingRouter);
app.use(notFound);
app.use(errorHandler);
export default app;