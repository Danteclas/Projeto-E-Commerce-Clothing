const { Users } = require('../models');

const UsersController = {
  renderUser: (req, res) => {
    res.render('home', { users });

  },
  index: (req, res) => {
    Users.findAll()
      .then(users => {
        console.log(users)
      })
  }
}

module.exports = UsersController;

