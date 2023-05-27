

export class PixError extends Error {

    statusCode
    errors

    constructor(errors,statusCode){
        super()
        this.errors = errors,
        this.statusCode = statusCode
    }

}