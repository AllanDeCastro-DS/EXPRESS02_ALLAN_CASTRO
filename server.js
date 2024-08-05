const ex = require("express")
const server = ex()



server.listen(3000)





//teste 1
// server.use((req,res)=>{
//     console.log("teste")
// })

server.use((req,res,next)=>{
    console.log("teste")
    next()
})


server.use((req,res,next)=>{
    req.requestTime=Date.now()
    next()
})
