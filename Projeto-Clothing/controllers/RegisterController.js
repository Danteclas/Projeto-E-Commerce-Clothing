const { Usuarios } = require('../models');
const bcrypt = require('bcrypt');

const registerController = {
  renderRegister: (req, res) => {
    res.render('register');
  },
  index: (req, res) => {
    const { nome, email, cpf, password, telefone } = req.body;
    console.log(req.body)


    const passwordHash = bcrypt.hashSync(password, 10);

    Usuarios.create({
      nome,
      email,
      cpf,
      password: passwordHash,
      telefone,
      admin: false,
    }).then(() => {
      res.redirect('/login');
    }).catch(error => res.send(error))
  }

}


module.exports = registerController; 
