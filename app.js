const express = require("express");
const path = require("path");


//initializations
const app = express();

//midelwares
app.use(express.static("public"));


//routing
const views = path.resolve(__dirname,"views");

app
   .get("/",(req,res) => res.sendFile(path.resolve(views,"index.html")))
   .get("/babbage",(req,res) => res.sendFile(path.resolve(views,"babbage.html")))
   .get("/berners-lee",(req,res) => res.sendFile(path.resolve(views,"berners-lee.html")))
   .get("/clarke",(req,res) => res.sendFile(path.resolve(views,"clarke.html")))
   .get("/hamilton",(req,res) => res.sendFile(path.resolve(views,"hamilton.html")))
   .get("/hopper",(req,res) => res.sendFile(path.resolve(views,"hopper.html")))
   .get("/lovelace",(req,res) => res.sendFile(path.resolve(views,"lovelace.html")))
   .get("/turing",(req,res) => res.sendFile(path.resolve(views,"turing.html")));


//start server
app.listen(3030,() => console.log("server on port 3030"));