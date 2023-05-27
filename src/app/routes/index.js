import { Router } from "express";

import { pixRoutes } from './PixRoutes';

export const routes = Router();

routes.use('/qrcode',pixRoutes);