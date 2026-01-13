const express= require("express");
const router=express.Router();
const {
    getPlumbing,
    getElectrical,
    getCleaning,
    getAllServices
} = require('../controllers/services.controller');

router.get('/plumbing', getPlumbing);
router.get('/electrical', getElectrical);
router.get('/cleaning', getCleaning);
router.get('/all', getAllServices);

module.exports=router;
