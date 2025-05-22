const dbDefs = require("../../framework/dbModels/dbDef");
const dbService = require("../services/dbService");

async function create(req) {
    body = req.body
    id = dbService.createId()
    let businessData = await dbService.create(dbDefs.businessTable, body, id)
    return businessData
}

module.exports ={
    create
}