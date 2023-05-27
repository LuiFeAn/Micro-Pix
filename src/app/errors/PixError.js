

export class PixError extends Error {

    statusCode

    constructor(error,statusCode){
        super()
        this.message = error,
        this.statusCode = statusCode
    }

}