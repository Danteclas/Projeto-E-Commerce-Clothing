const { Fabricante } = require('../models');

const FabricanteController = {
  renderFabricante: (req, res) => {
    res.render('home', { fabricante });

  },
  index: (req, res) => {
    Fabricante.findAll()
      .then(fabricante => {
        console.log(fabricante)
      })

    return res.send('fabricante Ok')
  }
}

module.exports = FabricanteController;