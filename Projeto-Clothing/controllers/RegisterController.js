const { Usuarios } = require('../models');
const bcrypt = require('bcrypt');

const registerController = {
  renderRegister: (req, res) => {
    res.render('register');
  },
  index: (req, res) => {
    const { nome, email, cpf, password } = req.body;
    console.log(req.body)


    const passwordHash = bcrypt.hashSync(password, 10);

    Usuarios.create({
      nome,
      email,
      cpf,
      password: passwordHash,
      admin: false,
    }).then(() => {
      res.redirect('/signup');
    }).catch(error => res.send(error))
  }

}

module.exports = registerController; 
