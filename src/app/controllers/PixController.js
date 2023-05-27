import pixService from "../services/pixService.js";

import pixMapper from "../mappers/PixMapper.js";

export default {

    async create(req,res){

        const body = pixMapper.toPersistance(req.body);

        const { value, message, pix_username, key } = body;

        const qrcode = await pixService.generate({
            value,
            message,
            pix_username,
            key
        });

        res.json(qrcode);


    }

}