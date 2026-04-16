import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import pingRouter from './routes/ping';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', pingRouter);

export default app;