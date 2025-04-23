const express = require('express')
const app = express() //inicializando o servidor express e salva na variavel app
const PORT = 8000

///criar as minhas rotas

app.listen(PORT, () => {console.log('Servidor online')})