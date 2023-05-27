

export default {

    toDomain(persistencePix){

        const { pix_username, ...rest } = persistencePix;

        return {
           ...rest,
           pixUsername: pix_username
        }

    },

    toPersistance(domainPix){

        const { pixUsername, ...rest } = domainPix;

        return {
            ...rest,
            pix_username: pixUsername
        }

    }

}