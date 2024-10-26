const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Ingrid Zippert',
    imagem: 'https://i.pinimg.com/originals/7c/2d/42/7c2d425af2aaa358f12c79541d73bc54.jpg',
    minibio: 'designer de quarinhos'
})
}

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta  ", porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostrarPorta)