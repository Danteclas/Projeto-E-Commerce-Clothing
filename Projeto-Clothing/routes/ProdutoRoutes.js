const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');
const ProdutoRouter = express.Router();


ProdutoRouter.get('/produtos', ProdutoController.index);
//UserRouter.post('/', UsersController.User);
module.exports = ProdutoRouter;