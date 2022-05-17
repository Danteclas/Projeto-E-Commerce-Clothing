const express= require('express');
const path= require('path');
const routes = require('./routes');
const app= express();

//config do EJS no express
app.set('view engine', 'ejs');
//Definido a pasta de views para configuração no Express.
app.set('views',path.join(__dirname,'views'));
//Configuração para o JSON no EXpress.
app.use(express.json());
//Configuração de arquivos estáticos (public)
app.use(express.static(path.join(__dirname,'public')));
//ir para o Controller (MVC).
app.use('/',routes);


app.listen(3000,()=>console.log("Aplicação rodando em http://localhost:3000"));
//app.get('/',(req,res)=> res.json({mensagem:'Uma hora eu consigo!!'}));