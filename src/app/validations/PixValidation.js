import { body } from "express-validator";

import resultValidation from '../middlewares/resultValidation.js';

import toNumber from './custom/toNumber.js';

export default {

    create:[

        body('value')
        .notEmpty()
        .withMessage('É necessário informar o valor do PIX')
        .trim()
        .customSanitizer(toNumber),
        
        body('message')
        .optional()
        .trim(),

        body('key')
        .notEmpty()
        .withMessage('É necessário enviar a chave PIX')
        .trim(),

        body('pixUsername')
        .notEmpty()
        .trim()
        .withMessage('É necessário informar quem está realizando a transação'),

        resultValidation

    ]

}