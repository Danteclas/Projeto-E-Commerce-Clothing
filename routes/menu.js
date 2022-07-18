//arquivos de rotas no menu
const express = require('express');
const menuRouter = express.Router();
const menuController = require('../controllers/menuController'); 
   
menuRouter.get('/',menuController.getHomepage);
menuRouter.get('/product/',menuController.getProduct);
menuRouter.get('/search/',menuController.getSearch);
menuRouter.get('/signup/',menuController.getSignup);
menuRouter.get('/404/',menuController.get404);
menuRouter.get('/checkout/',menuController.getCheckout);
menuRouter.get('/cart/',menuController.getCart);
menuRouter.get('/login/',menuController.getLogin);
menuRouter.get('/seller/',menuController.getSeller);
menuRouter.get('/addProduct/',menuController.getaddProduct);




module.exports = menuRouter;
