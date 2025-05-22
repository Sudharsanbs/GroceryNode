const prodErrors = (res, error) => { 
    console.log(error) 
    if(error.isOperational){
        res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message
        });
    }else {
        res.status(500).json({
            status: 'error',
            msg : error.message,
            message: 'Something went wrong! Please try again later.'

        })
    }
}


 module.exports = async(error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    await prodErrors(res, error);
    res.end
    return;
}