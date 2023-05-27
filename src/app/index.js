import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import env from 'dotenv'

import { routes } from './routes/index.js';

import requestError from './middlewares/requestError.js';

env.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(requestError);

app.listen(process.env.PORT ?? 3001, () => console.log(`Server Started At Port ${process.env.PORT}`));