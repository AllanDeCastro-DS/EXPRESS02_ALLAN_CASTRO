const ex = require("express")
const server = ex()



server.listen(3000)





//teste 1
// server.use((req,res)=>{
//     console.log("teste")
// })


server.use((req, res, next) => {
    req.requestTime = Date.now()
    next()
})

server.get('/', (req, res) => {
    res.send("<h1>Holy canoly</h1>")
    console.log(req.requestTime)
})
