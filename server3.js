const ex = require("express")
const server = ex()



server.listen(3000)




server.get('/', (req, res) => {
    res.send("Olá Mundo")
})


server.get('/ola/:nome',(req,res)=>{
    console.log(req.params.nome)
    res.send("Olá "+req.params.nome)
})


server.get('/ola/:nome/:empresa',(req,res)=>{
    console.log(req.params.nome)
    res.send("Olá "+req.params.nome+" Da empresa "+req.params.empresa)
})

server.get("/soma/:a/:b",(req,res)=>{
    res.send("Resultado de "+req.params.a+" + "+req.params.b+' é: '+ (parseInt(req.params.a)+ parseInt(req.params.b)))
})