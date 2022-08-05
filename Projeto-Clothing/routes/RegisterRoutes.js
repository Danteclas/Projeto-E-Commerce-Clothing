const express = require('express');
const registerController = require('../controllers/RegisterController');
const registerRouter = express.Router();

registerRouter.get('/signup', registerController.renderRegister);
registerRouter.post('/signup', registerController.index);

module.exports = registerRouter;  