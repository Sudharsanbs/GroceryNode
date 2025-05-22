const router = require("express").Router();
const businessController = require('../../framework/controllers/business.table.controller');
const asyncErrorHandler = require('../../framework/services/asyncErrorHandler');
const httpService = require("../../framework/services/http.service");


router.post("/create", asyncErrorHandler(async (req, res) => {
    let data = await businessController.create(req,res);
        httpService.sendSuccessResponse(res, data);
  }));


  module.exports = router;
