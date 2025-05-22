const router = require("express").Router();
const shopController = require('../../grocery/controller/groceryShopReg.controller');
const asyncErrorHandler = require('../../framework/services/asyncErrorHandler');
const httpService = require("../../framework/services/http.service");
const {uploadSingleFile} = require("../../framework/services/multer.service");
const checkAuth = require('../../framework/services/auth-check')

router.post("/create",uploadSingleFile,checkAuth,asyncErrorHandler(async (req, res) => { 
    let data = await shopController.create(req);
    httpService.sendSuccessResponse(res, data);
  }));

router.post("/update", uploadSingleFile,checkAuth,asyncErrorHandler(async (req, res) => { 
    let data = await shopController.update(req);
    httpService.sendSuccessResponse(res, data);
  }));  

router.post("/get", checkAuth,asyncErrorHandler(async (req, res) => { 
    let data = await shopController.get(req);
    httpService.sendSuccessResponse(res, data);
  }));    
  
router.post("/find", checkAuth,asyncErrorHandler(async (req, res) => { 
    let data = await shopController.find(req);
    httpService.sendSuccessResponse(res, data);
  }));    

router.post("/remove", checkAuth,asyncErrorHandler(async (req, res) => { 
    let data = await shopController.remove(req);
    httpService.sendSuccessResponse(res, data);
  }));     
    
 

module.exports = router