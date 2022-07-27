const express = require('express');
const UsersController = require('../controllers/UserController');
const UserRouter = express.Router();


UserRouter.get('/users', UsersController.index);
//UserRouter.post('/', UsersController.User);
module.exports = UserRouter;