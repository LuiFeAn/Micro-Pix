import { Router } from "express";

import pixController from '../controllers/PixController';

import pixValidation from '../validations/PixValidation';

export const pixRoutes = Router();

pixRoutes.post(
    '/',
    pixValidation.create,
    pixController.create
);