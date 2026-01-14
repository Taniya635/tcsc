const express=require("express");
const router=express.Router();
const {
    getHome,
    getAbout,
    getContact,
    getServices,
    getRegister,
    postRegister,
    getLogin,
    postLogin,
    postLogout,
    getPageNotFound
} = require('../controllers/pages.controller');


router.get('/home', getHome);
router.get('/about', getAbout);
router.get('/contact', getContact);
router.get('/services', getServices);
router.get('/register', getRegister);
router.get('/login', getLogin);
router.get('/pgNotFound', getPageNotFound);


router.post('/register', postRegister);
router.post('/login', postLogin);
router.post('/logout', postLogout);

module.exports=router;
