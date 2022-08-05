/* const { Usuarios } = require('../models');

const UsersController = {
  renderUser: (req, res) => {
    res.render('home', { users });

  },
  index: (req, res) => {
    Usuarios.findAll()
      .then(users => {
        console.log(users)
      })

    return res.send('Ok')
  }
}

module.exports = UsersController;

 */