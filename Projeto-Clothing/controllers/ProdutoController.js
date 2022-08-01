const { Produtos } = require('../models');

const ProdutoController = {
  renderProduto: (req, res) => {
    res.render('home', { produtos });

  },
  index: (req, res) => {
    Produtos.findAll()
      .then(produtos => {
        console.log(produtos)
      })

    return res.send('produto Ok')
  }
}

module.exports = ProdutoController;
