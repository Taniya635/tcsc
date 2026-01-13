const UserModel = require('../models/user.model');

const getAllUsers = async(req,res)=>{
    try{
        const {location,service,statuss,name}=req.query;

        const filter={};

        if(location){
            filter.location={$regex:location, $options:"i"}
        }

        if(service){
            filter.service={$regex:service, $options:"i"}
        }

        if(statuss){
            filter.statuss={$regex:statuss, $options:"i"}
        }

        if(name){
            filter.name={$regex:name, $options:"i"}
        }
        const users=await UserModel.find(filter);
        res.status(200).json({users});

    }catch(err){
        res.status(500).json({error:"Failed to fetch users"})
    }
};

const searchUsers = async(req,res)=>{
    try{
        const {q}=req.query;
        if(!q){
            return res.status(400).json({error:"Enter item to search"});
        }

        const users=await UserModel.find({
            $or:[
                {name:{$regex:q,$options:"i"}},
                {location:{$regex:q,$options:"i"}},
                {service:{$regex:q, $options:"i"}},
                {statuss:{$regex:q, $options:"i"}}
            ]
        });
        res.status(200).json({
            results:users,
            count:users.length,
            searchItem:q
        });
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Unable to search"});
        
    }
};

const addUser = async(req,res)=>{
    const user=new UserModel(req.body);
    try{
        await user.save();
        res.status(200).json({message:"User added successfully"});

    }catch(err){
        res.status(500).json({error:"Failed to add user"});
    }
};

const updateUser = async(req,res)=>{
    try{
        await UserModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({message:"User updated "})
    }catch(err){
        res.status(500).json({error:"Failed to update user details"});
    }
};

const deleteUser = async(req,res)=>{
    try{
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"User deleted successfully"})
    }catch(err){
        res.status(500).json({error:"Failed to delete user"});
    }
};

module.exports = {
    getAllUsers,
    searchUsers,
    addUser,
    updateUser,
    deleteUser
};
