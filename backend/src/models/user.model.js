const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    contact:{type:Number},
    service:{type:String},
    location:{type:String},
    statuss:{type:String, enum:['online','offline'], default:'offline'}
}, {
    timestamps: true // Adds createdAt and updatedAt automatically
})

const UserModel=mongoose.model('users',UserSchema)

module.exports = UserModel;
