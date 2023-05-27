import { Router } from "express";

export const pixRoutes = Router();

import pixController from "../controllers/pixController.js";
import pixValidation from "../validations/pixValidation.js";


pixRoutes.post(
    '/',
    pixValidation.create,
    pixController.create
)