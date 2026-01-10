const express=require("express");
const router=express.Router();

router.get('/home',(req,res)=>{
    res.json({page:'Home',message:"Welcome to service finder"});
})

router.get('/about',(req,res)=>{
    res.json({page:"About",message:"About us page"})
})

router.get('/contact',(req,res)=>{
    res.json({page:"Contact",message:"Contact us"})
})

router.get('/services',(req,res)=>{
    res.json({page:"Services",message:"Services"})
})

router.get('/register',(req,res)=>{
    res.json({page:"Register",message:"Register"})
})

router.get('/login',(req,res)=>{
    res.json({page:"Login",message:"Login"})
})

router.get('/pgNotFound',(req,res)=>{
    res.json({page:"PageNotFound",message:"Page not found"})
})

module.exports=router