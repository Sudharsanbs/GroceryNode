const dbService = require("./dbService");
const dbDefs = require("../dbModels/dbDef");
const asyncErrorHandler = require('./asyncErrorHandler');
const customError = require("../errorControllers/customError");
const errorMessage = require("../errorControllers/errorMessage.json")


module.exports = asyncErrorHandler(
    async (req,res,next)=>
   
    {   const session = await dbService.findByPk(dbDefs.session,req.headers["session-id"])
   if(session == null){
      throw new customError(errorMessage.AuthenticationFailed);
   }
   req.body.sessionData = session
   next()
   } 
   )
    
