import { validationResult } from "express-validator";

import { PixError } from "../errors/PixError.js";

export default ( req, res, next ) => {

    const errors = validationResult(req).array();

    if(errors.length > 0){

       throw new PixError(errors,404);

    }

    next();

}