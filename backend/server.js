// test.js
const express= require("express");
const mongoose= require("mongoose");
const cors =require("cors");

const pagesRouter = require('./routes/pages');
const serviceRouter=require('./routes/services');
const apiRouter=require('./routes/api');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/tcsc')

mongoose.connection.on('connected', () => {
  console.log('MongoDB is running and connected successfully');
});

app.get("/", (req, res) => {
  res.json({
    message:"Welcome to Service Finder",
    routes:{
        pages:"pages/home, pages/about,pages/services,pages/contact,pages/register,pages/login",
        services:"/services/plumbing, services/electrical,services/cleaning,services/carpentery,services/all",
        api:"/api/users, /api/adduser,/api/updateuser/:id,/api/deleteuser/:id"
    }
  })
});

app.use('/pages',pagesRouter);
app.use('/services',serviceRouter);
app.use('/api',apiRouter);

app.listen(4000, () => {
    console.log("Running on 4000");
});