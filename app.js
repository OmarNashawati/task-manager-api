import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Task manager api');
});

export default app;
