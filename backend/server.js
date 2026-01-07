// test.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/tcsc')

mongoose.connection.on('connected', () => {
  console.log('MongoDB is running and connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const UserSchema=new mongoose.Schema({
    name:String,
    location:String,
    service:String,
    contact:Number,
})

const UserModel=mongoose.model('users',UserSchema)

app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
    
});

app.post("/addUser", async (req, res) => {
    const user=new UserModel(req.body);
    try {
        await user.save();
        res.status(200).json({message: "User added successfully"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add user" });
    }
}); 

app.patch("/updateUser/:id", async (req, res) => {
    const id=req.params.id;
    try {
        await UserModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "User updated successfully"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to update user" });
    }
});

app.delete("/deleteUser/:id", async (req, res) => {
    const id=req.params.id;
    try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json({message: "User deleted successfully"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to delete user" });
    }
});

app.listen(5000, () => {
    console.log("Running on 5000");
});