import { QrCodePix } from "qrcode-pix";
import { v4 } from "uuid";

export default {

    generate({value,message,key,pix_username}){

        const qrCodePix = QrCodePix({
            version: "01",
            key,
            name: pix_username,
            transactionId: v4().slice(25),
            message,
            value,
        });

        return qrCodePix.base64();

    }

}