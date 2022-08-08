

const express = require('express');
const LoginController = require('../controllers/LoginController');
const LoginRouter = express.Router();

LoginRouter.get('/login', LoginController.renderLogin);
LoginRouter.post('/login', LoginController.loginUser);

module.exports = LoginRouter; 