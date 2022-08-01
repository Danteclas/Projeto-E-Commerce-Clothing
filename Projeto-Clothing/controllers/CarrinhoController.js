const { Carrinho } = require('../models');

const CarrinhoController = {
  renderUser: (req, res) => {
    res.render('home', { carrinho });

  },
  index: (req, res) => {
    Carrinho.findAll()
      .then(carrinho => {
        console.log(carrinho)
      })

    return res.send('carrinho Ok')
  }
}

module.exports = CarrinhoController;

