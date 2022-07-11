import express from 'express'
import ClientesControllers from '../controllers/ClientesController.js'

const produtosRouter = express.Router()


produtosRouter.get('/', (req, res) => {
    ClientesControllers.listAll(req, res)
});

produtosRouter.get('/:id', async (req, res) => {
    ClientesControllers.listOne(req, res)
});

produtosRouter.post('/', login, (req, res) => {
    ClientesControllers.criarProduto(req, res)
});

produtosRouter.patch('/:id', login, (req, res) => {
    ClientesControllers.editarProduto(req, res)
});

produtosRouter.delete('/:id', login, (req, res) => {
    ClientesControllers.deletaProduto(req, res)
});



export default produtosRouter