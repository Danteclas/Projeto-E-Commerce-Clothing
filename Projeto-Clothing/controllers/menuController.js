const { Produtos } = require('../models')

const menuController = {
  getHomepage: async (req, res) => {
    const produtos = await Produtos.findAll()

    res.render('index', { produtos });
  },
  getProduct: async (req, res) => {
    const produtos = await Produtos.findAll()
    console.log(produtos)
    res.render('product', { produtos });
  },
  getSearch: (req, res) => {
    res.render('search')
  },
  getSignup: (req, res) => {
    res.render('signup')
  },
  get404: (req, res) => {
    res.render('404')
  },
  getCheckout: (req, res) => {
    res.render('checkout')
  },
  getCart: (req, res) => {
    res.render('cart')

  },
  getLogin: (req, res) => {
    res.render('login')

  },
  getMyPurchases: (req, res) => {
    res.render('myPurchases')

  },
  getaddProduct: (req, res) => {
    res.render('addProduct')

  },
}

module.exports = menuController;