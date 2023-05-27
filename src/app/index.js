import express from 'express';
import cors from 'cors';
import env from 'dotenv'

import { routes } from './routes/index.js';

env.config();

const app = express();

app.use(cors);

app.use(express.json);

app.use(routes);

app.listen(process.env.PORT, () => console.log('Server Started'));