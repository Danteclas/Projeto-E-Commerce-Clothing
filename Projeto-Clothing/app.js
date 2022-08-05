const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const app = express();
const methodOverride = require('method-override')

//Rotas banco de dados
/* const usersRouter = require('./routes/UserRoutes'); */
const ProdutoRouter = require('./routes/ProdutoRoutes');
const CarrinhoRouter = require('./routes/CarrinhoRoutes');
const EstoqueRouter = require('./routes/EstoqueRoutes');
const FabricanteRouter = require('./routes/FabricanteRoutes');
const RegisterRouter = require('./routes/RegisterRoutes');
const LoginRouter = require('./routes/LoginRoutes');


let staticPath = path.join(__dirname, "public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));


app.use('/', routes);
app.use(ProdutoRouter);
app.use(CarrinhoRouter);
app.use(EstoqueRouter);
app.use(FabricanteRouter);
app.use(RegisterRouter);
/* app.use(LoginRouter); */
/* informações do formulário para o req.bod */
app.use(cookieParser());

// 404 route
app.use('404', (req, res) => {
  res.sendFile(path.join(staticPath, "404.ejs"))
})
app.use((req, res) => {
  res.redirect("/404");
})



app.listen(3000, () => console.log("Aplicação rodando em http://localhost:3000"));
