import pixService from "../services/pixService";
import pixMapper from "../mappers/PixMapper";

export default {

    async create(req,res){

        const body = pixMapper.toPersistance(req.body);

        console.log(body);

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