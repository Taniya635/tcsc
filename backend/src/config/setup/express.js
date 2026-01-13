const express= require("express");
const cors =require("cors");
const allRoutes = require('../../routes/app.routes');

const configureExpress = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

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

  allRoutes(app);

  return app;
};

module.exports = { configureExpress };
