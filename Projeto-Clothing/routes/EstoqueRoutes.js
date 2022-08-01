const express = require('express');
const EstoqueController = require('../controllers/EstoqueController');
const EstoqueRouter = express.Router();


EstoqueRouter.get('/estoque', EstoqueController.index);
//EstoqueRouter.post('/', EstoqueController.User);
module.exports = EstoqueRouter;