const express = require("express");
const rootDir = require("../helper/path");
const path = require("path");
const route = express.Router();

route.get("/contactus",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
})
route.post('/success',(req,res,next)=>{
    res.send('Form successfuly filled');
})
module.exports = route;