import express from 'express'
import cors from 'cors'
import usuariosRouter from './src/routes/usuarios.route.js'
import produtosRouter from './src/routes/produtos.route.js'
import clientesRouter from './src/routes/clientes.route.js'

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log('A API está funcionando com sucesso na porta 3000')
})

app.use("/api/usuarios", usuariosRouter )
app.use("/api/produtos", produtosRouter )
app.use("/api/clientes", clientesRouter )