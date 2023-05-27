import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import env from 'dotenv'

import { routes } from './routes/index.js';

import requestError from './middlewares/requestError.js';

env.config();

const PORT_ = process.env.PORT ?? 3001;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(requestError);

app.listen(PORT_ , () => console.log(`Server Started At Port ${PORT_ }`));