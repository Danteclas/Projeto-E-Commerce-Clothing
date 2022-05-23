//arquivos de rotas no menu
const express = require('express');
const menuRouter = express.Router();
const menuController = require('../controllers/menuController'); 
   
menuRouter.get('/',menuController.getHomepage);
menuRouter.get('/product/:id',menuController.getProduct);
menuRouter.get('/search/:id',menuController.getSearch);
menuRouter.get('/signup/:id',menuController.getSignup);

module.exports = menuRouter;