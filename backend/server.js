// test.js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("SERVER WORKS");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Running on 5000");
});
