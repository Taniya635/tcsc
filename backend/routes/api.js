const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:String,
    location:String,
    service:String,
    statuss:String,
    contact:Number,
})

const UserModel=mongoose.model('users',UserSchema)

router.get('/users',async(req,res)=>{
    try{
        const users=await UserModel.find({});
        res.status(200).json({users});

    }catch(err){
        res.status(500).json({error:"Failed to fetch users"})
    }
})

router.post('/adduser',async(req,res)=>{
    const user=new UserModel(req.body);
    try{
        await user.save();
        res.status(200).json({message:"User added successfully"});

    }catch(err){
        res.status(500).json({error:"Failed to add user"});
    }
})

router.patch('/updateuser/:id',async(req,res)=>{
    try{
        await UserModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({message:"User updated "})
    }catch(err){
        res.status(500).json({error:"Failed to update user details"});
    }
})

router.delete('/deleteuser/:id',async(req,res)=>{
    try{
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"User deleted successfully"})
    }catch(err){
        res.status(500).json({error:"Failed to delete user"});
    }
})

module.exports=router;