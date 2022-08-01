const express = require('express');
const FabricanteController = require('../controllers/FabricanteController');
const FabricanteRouter = express.Router();


FabricanteRouter.get('/fabricante', FabricanteController.index);
//FabricanteRouter.post('/', FabricanteController.User);
module.exports = FabricanteRouter;