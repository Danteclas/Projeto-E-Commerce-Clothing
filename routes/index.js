const express = require('express');
const menuRouter = require("./menu");
const routes = express.Router();
//const multer = require("multer");


routes.use('/', menuRouter);

module.exports= routes; 