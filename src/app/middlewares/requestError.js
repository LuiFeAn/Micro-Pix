

export default (error,req,res,next) => {

    if( error ){

        res.json({
            errors: error.errors ?? [{
                msg:'Um erro interno ocorreu'
            }]
        }).status(error.statusCode ?? 400);

        return

    }

    next();
    
}