const express = require("express");
const contactController = require('../controllers/contactController');
const route = express.Router();

route.get("/contactus",contactController.getContactUs);
route.post('/success',contactController.getSuccess);
module.exports = route;