const menuController={
  getHomepage:(req,res)=>{
     res.render('index');
  },
    getProduct: (req,res)=>{
    res.render('product')
  },
  getSearch :(req,res)=> {
    res.render('search')
  },
 getSignup : (req,res)=>{
   res.render('signup')
 },
 get404 : (req,res)=>{
  res.render('404')
},
getCheckout: (req,res)=>{
 res.render('checkout')
},
getCart: (req,res)=>{
  res.render('cart')

},
getLogin: (req,res)=>{
  res.render('login')

},
getSeller: (req,res)=>{
  res.render('seller')

},
getaddProduct: (req,res)=>{
  res.render('addProduct')

},
}

module.exports = menuController;