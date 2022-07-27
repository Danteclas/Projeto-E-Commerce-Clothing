// o fs abre arquivos nas estruturas e preenche qdo usuário entra em uma tota 
const fs = require('fs')

function logSite(req ,res ,next){
fs.appendFileSync('log.txt', 'O usuário entrou na url: '+ req.url)

  next();

}

module.exports = logSite;