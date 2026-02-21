import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

import { notFound } from './middleware/not-found.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Task manager api');
});

app.use(notFound);

export default app;
