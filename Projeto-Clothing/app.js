const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const usersRouter = require('./routes/UserRoutes')
//const bcrypt = require("bcrypt");
/*const db = require('/Users/danielfranca/Project-E-Commerce-Clothing/database/models/db.js');*/
let staticPath = path.join(__dirname, "public");

//const logMiddleware = require('./middlewares/logSite');
//config do EJS no express
app.set('view engine', 'ejs');
//Definido a pasta de views para configuração no Express.
app.set('views', path.join(__dirname, 'views'));
//Configuração para o JSON no EXpress.
app.use(express.static(staticPath));
app.use(express.json());
//Configuração de arquivos estáticos (public) 
app.use(express.static(path.join(__dirname, 'public')));
//ir para o Controller (MVC).
app.use(express.json());
app.use('/', routes);
app.use(usersRouter);

/*pp.use('Users', (req, res) => {
  res.sendFile(path.join(staticPath, "Users.js"))
})
app.use((req, res) => {
  res.redirect("/Users");
//})*/


//log de Middleware.
//app.use(logMiddleware); 


//signup route
app.get('/signup', (req, res) => {
  res.sendFile(path.join(staticPath, "signup.ejs"))
})
app.post('/signup/', (req, res) => {
  let { name, email, password, number, tac, notification } = req.body;
  //validação form
  if (name.lenght < 3) {
    return res.json({ 'alert': 'O nome precisa ter ao menos 3 letras' });
  } else if (!email.length) {
    return res.json({ 'alert': 'Por favor, coloque o seu email' });
  } else if (password.length < 8) {
    return res.json({ 'alert': 'A senha precisa de ao menos 8 caracteres' });
  } else if (!number.length) {
    return res.json({ 'alert': 'Por favor, coloque o seu celular' });
  } else if (!Number(number) || number.length < 9) {
    return res.json({ 'alert': 'Número inválido, por favor, adicione um número de celular válido!' });
  } else if (!tac) {
    return res.json({ 'alert': 'Você precisa aceitar os nossos termos e condições para continuar' });
  }
})


//login route
app.get('/login', (req, res) => {
  res.sendFile(path.join(staticPath, "login.ejs"));
})
app.post('/login', (req, res) => {
  let { email, password } = req.body;
  if (!email.lenght || !password.lenght) {
    return res.json({ 'alert': 'Preencher todos os campos' })
  } else {
    bcrypt.compare(password, user.data().password, (err, result) => {
      if (result) {
        let data = user.data();
        return res.json({
          name: data.name,
          email: data.email,
          seller: data.seller,
        })
      } else {
        ;
      }
    })
  }
})

//add product 
app.get('/add-product', (req, res) => {
  res.sendFile(path.join(staticPath, "/add-product.ejs"))
});
app.get('/products/:id', (req, res) => {
  res.sendFile(path.join(staticPath, 'produtct.ejs'))
})
app.get('/search/:key', (req, res) => {
  res.sendFile(path.join(staticPath, 'search.ejs'))
})
app.get('/cart', (req, res) => {
  res.sendFile(path.join(staticPath, 'cart.ejs'))
})

// 404 route
app.use('404', (req, res) => {
  res.sendFile(path.join(staticPath, "404.ejs"))
})
app.use((req, res) => {
  res.redirect("/404");
})



app.listen(3000, () => console.log("Aplicação rodando em http://localhost:3000"));
