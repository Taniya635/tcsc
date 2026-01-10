const express= require("express");
const router=express.Router();

router.get('/plumbing',(req,res)=>{
    res.json({service:"Plumbing", available:true})
})

router.get('/electrical',(req,res)=>{
    res.json({service:'Electrical', available:true})
})

router.get('/cleaning',(req,res)=>{
    res.json({service:"Cleaning",available:true})
})

router.get('/all',(req,res)=>{
    res.json({service:["Plumbing","Electrical","Cleaning"]});
})

module.exports=router;