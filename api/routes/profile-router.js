const router = require("express").Router();
const profileController = require('../../framework/controllers/profile-controller');
const asyncErrorHandler = require('../../framework/services/asyncErrorHandler');
const httpService = require("../../framework/services/http.service");
const checkAuth = require('../../framework/services/auth-check');


router.post("/update",checkAuth,  asyncErrorHandler(async (req, res) => {
    let data = await profileController.update(req,res);
        httpService.sendSuccessResponse(res, data);
  }));
  
  router.post("/get",checkAuth,  asyncErrorHandler(async (req, res) => {
    let data = await profileController.get(req,res);
        httpService.sendSuccessResponse(res, data);
  }));
  
  router.post("/find",checkAuth,  asyncErrorHandler(async (req, res) => {
    let data = await profileController.find(req,res);
        httpService.sendSuccessResponse(res, data);
  }));


  module.exports = router;