
const { Usuarios } = require('../models');
const bcrypt = require('bcrypt');

const LoginController = {
  renderLogin: (req, res) => {
    res.render('login');
  },
  loginUser: (req, res) => {
    const { email, password } = req.body;



    Usuarios.findOne({
      where: {
        email,
      },
    }).then(user => {
      const userExists = bcrypt.compare(password, user.password)//password cadastrado no db.

      if (userExists) {// redirecionar para a roda de login novamente.
        /* ShowAlert('Usuario não existe');
      } */
        res.redirect('/#');
      }

      // se der true a comparacao, então joga o usuario para a home da aplicacao 

      else {

        res.redirect('/login');
      }


    }

    ).catch(error => console.log(error));
  }

}


module.exports = LoginController;
