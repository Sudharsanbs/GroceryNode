const router = require("express").Router();
const authController = require('../../framework/controllers/auth-controller');
const asyncErrorHandler = require('../../framework/services/asyncErrorHandler');
const httpService = require("../../framework/services/http.service");

router.post("/signUp", asyncErrorHandler(async (req, res) => { 
    let data = await authController.signUp(req,res);
    httpService.sendSuccessResponse(res, data);
  }));
  
  router.post("/login",  asyncErrorHandler(async (req, res) => { 
    let data = await authController.login(req,res);
    httpService.sendSuccessResponse(res, data);
  }));

module.exports = router