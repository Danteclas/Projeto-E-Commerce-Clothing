const express = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');
const CarrinhoRouter = express.Router();


CarrinhoRouter.get('/carrinho', CarrinhoController.index);
//CarrinhoRouter.post('/', CarrinhoController.User);
module.exports = CarrinhoRouter;