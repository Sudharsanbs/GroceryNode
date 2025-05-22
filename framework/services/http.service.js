  const customError = require("../errorControllers/customError");


function sendSuccessResponse(res, data){
  res.setHeader('Content-Type', 'application/json')
  res.json({'apiStatus': 200 ,"data":data})
  }


function sendErrorResponse(errorCode, message ){
  throw (new customError(message,errorCode))
  }
  
  
  module.exports ={sendSuccessResponse,sendErrorResponse}
