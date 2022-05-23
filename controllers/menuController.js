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
 }
}

module.exports = menuController;