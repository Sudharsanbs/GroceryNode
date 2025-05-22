class CustomError extends Error{
    constructor(messageConfig){
        super(messageConfig.message);
        this.statusCode = messageConfig.code;
        this.status = messageConfig.code >= 400 && messageConfig.code < 500 ? 'fail' : 'error';

        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = CustomError;