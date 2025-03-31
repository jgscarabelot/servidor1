const http = require('http')
const {soma} = require('./teste')

const PORT = 8000

    const server = http.createServer((req,res)=>{
        console.log(req.url.replace('/','').replace('?','').split('&'))
        let parametros =
        res.end(`O valor final é ${resultado}`)
    })


//fazer ele ouvir na porta 8000
server.listen(PORT, ()=>{
    console.log(`o servidor foi inicializado na porta ${PORT}`)
})