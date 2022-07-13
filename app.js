import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import morganBody from 'morgan-body'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

import usuariosRouter from './src/routes/usuarios.route.js'
import produtosRouter from './src/routes/produtos.route.js'
import clientesRouter from './src/routes/clientes.route.js'


const app = express()

app.use(express.json())
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const log = fs.createWriteStream(
    path.join(__dirname, "./src/logs", "api.log"), { flags: "a" }
)

morganBody(app,{
    noColors: true,
    stream: log
})

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log('A API está funcionando com sucesso na porta 3000')
})

app.use("/api/usuarios", usuariosRouter )
app.use("/api/produtos", produtosRouter )
app.use("/api/clientes", clientesRouter )