/* 
const { Users } = require('../database/models');
const bcrypt = require('bcrypt');

const loginController = {
  renderLogin: (req, res) => {
    res.render('login');
  },
  loginUser: (req, res) => {
    const { email, password } = req.body;

    Users.findOne({
      where: {
        email,
      },
    }).then(user => {

      if (!user) {
        alert('Usuario não existe');
        res.redirect('/login');
      }

      if (bcrypt.compareSync(password, user.password)) {
        res.cookie('user', JSON.stringify({ id: user.id, nome: user.nome, type: user.type }));

        res.redirect('/login');
      }

      res.render('/login');
    }).catch(error => console.log(error));
  }
}

module.exports = loginController;
 */