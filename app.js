const express= require('express');
const path= require('path');
const routes = require('./routes');
const app= express();
//const logMiddleware = require('./middlewares/logSite');

//config do EJS no express
app.set('view engine', 'ejs');
//Definido a pasta de views para configuração no Express.
app.set('views',path.join(__dirname,'views'));
//Configuração para o JSON no EXpress.
app.use(express.json());
//Configuração de arquivos estáticos (public) 
app.use(express.static(path.join(__dirname,'public')));
//ir para o Controller (MVC).
app.use(express.json());
app.use('/',routes);

//log de Middleware.
//app.use(logMiddleware); 

//signup route
app.post('/signup/',(req,res)=> {
 let{ name,email,password,number,tac,notification}= req.body;
 //validação form
 if(name.lenght < 3){
  return res.json({'alert':'O nome precisa ter ao menos 3 letras'});
 } else if(!email.length){
  return res.json({'alert':'Por favor, coloque o seu email'});
}else if(password.length < 8){
  return res.json({'alert':'A senha precisa de ao menos 8 caracteres'});
}else if(!number.length){
  return res.json({'alert':'Por favor, coloque o seu celular'});
}else if(!Number(number) || number.length < 9){
 return res.json ({'alert':'Número inválido, por favor, adicione um número de celular válido!'});
}else if(!tac){
 return res.json({'alert':'Você precisa aceitar os nossos termos e condições para continuar'});
}else{
  

}
//store user in db
/* db.collection("users").doc(email).get()
.then(user =>{
  if(user.exists){
  return res.json({'alert':'email já existe'});

}else {
  //encrypt the password before storing it.
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password, salt, (err, hash)=>{
      req.body.password= hash;
      db.collection('users').doc(email).set(req.body)
      .then(data => {
        res.json({
          name : req.body.name,
          email : req.body.email,
          seller : req.body.seller,
          
        })
      })
    })
  })
}
;
*/
//login route
app.get('/login',(req,res)=>{
  res.sendFile(path.join(staticPath, "login.ejs"));
})
app.post('/login',(req,res)=>{
  let{email,password} = req.body;
  if(!email.lenght || !password.lenght){
  return res.json({'alert':'Preencher todos os campos'})
  }else{
    bcrypt.compare(password, user.data().password, (err, result)=>{
      if(result){
        let data = user.data();
        return res.json({
          name: data.name,
          email: data.email,
          seller: data.seller,
        })
      } else {;
      }
    })
  }
})
//seller-admin Route
app.get('seller',(req,res)=> {
  res.sendFile(path.join(staticPath,"seller.ejs"))
})
app.post('/seller',(req,res)=>{
  let{ name,about,address, number,tac,legit ,email} = req.body;
  if(!name.lenght || !address.lenght || !about.lenght ||!number.lenght <10 ||!Number(number))
  {
    return res.json({'alert':"Algumas informações estão inválidas"});
  }else if(!tac || !legit){
    return res.json({'alert':" Você deve aveitar nossos termo e condições"})
  }

})
//add prodoct 
app.get('/add-product',(req,res)=>{
  res.sendFile(path.join(staticPath,"/add-product.ejs"))
});

// 404 route
app.get('404',(req,res)=>{
  res.sendFile(path.join(staticPath,"404.ejs"))
})

  res.json('data received');
  });


app.listen(3000,()=>console.log("Aplicação rodando em http://localhost:3000"));
//app.get('/',(req,res)=> res.json({mensagem:'Uma hora eu consigo!!'}));