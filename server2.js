const mg = require("morgan")
const ex = require("express")
const morgan = require("morgan")


const server = ex()
//server.use(morgan('tiny'))


server.use(morgan('Metodo= :method | URL= :url | Status= :status'))


server.get('/',(req,res)=>{
    res.send('teste de conexão')
})


server.listen(3000)