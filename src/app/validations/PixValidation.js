import { body } from "express-validator";
import toNumber from './custom/toNumber';

export default {

    create:[

        body('value')
        .notEmpty()
        .withMessage('É necessário informar o valor do PIX')
        .trim()
        .customSanitizer(toNumber),
        
        body('message')
        .optional()
        .trim()
        .toString(),

        body('key')
        .notEmpty()
        .trim()
        .toString(),

        body('pix_username')
        .notEmpty()
        .trim()
        .withMessage('É necessário informar quem está realizando a transação')
        .toString()

    ]

}