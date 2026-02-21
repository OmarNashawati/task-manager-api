import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

import { notFound } from './middleware/not-found.js';

import authRoute from './routes/authRoute.js';
import taskRoute from './routes/taskRoute.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Task manager api');
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tasks', taskRoute);

app.use(notFound);

export default app;
