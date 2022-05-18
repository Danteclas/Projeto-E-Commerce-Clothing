const menuController={
  getHomepage:(req,res)=>{
     res.render('index');
  },
 /* getProduct: (req,res)=>{
    res.render('product')
  },
  getSearch :(req,res)=> {
    res.render('search')
  },
 /* getSearch :(req,res)=> {
    res.render('404')
  },*/
}

module.exports = menuController;