import { Router } from "express";

export const routes = Router();

import { pixRoutes } from './pixRoutes.js';

routes.use('/qrcode',pixRoutes);