const { Estoque } = require('../models');

const EstoqueController = {
  renderEstoque: (req, res) => {
    res.render('home', { estoque });

  },
  index: (req, res) => {
    Estoque.findAll()
      .then(estoque => {
        console.log(estoque)
      })

    return res.send('estoque Ok')
  }
}

module.exports = EstoqueController;