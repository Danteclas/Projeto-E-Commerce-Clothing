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
getPainel: (req,res)=>{
 res.render('painel')
}


}

module.exports = menuController;