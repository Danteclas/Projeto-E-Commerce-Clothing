//arquivos de rotas no menu
const express = require('express');
const menuRouter = express.Router();
const menuController = require('../controllers/menuController'); 
   
menuRouter.get('/',menuController.getHomepage);

module.exports = menuRouter;