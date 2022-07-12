import express from 'express'
import ClientesControllers from '../controllers/ClientesController.js'
import login from '../../middleware/login.js';

const produtosRouter = express.Router()


produtosRouter.get('/', (req, res) => {
    ClientesControllers.listAll(req, res)
});

produtosRouter.get('/:id', async (req, res) => {
    ClientesControllers.listOne(req, res)
});

produtosRouter.post('/', login, (req, res) => {
    ClientesControllers.criarCliente(req, res)
});

produtosRouter.patch('/:id', login, (req, res) => {
    ClientesControllers.editarCliente(req, res)
});

produtosRouter.delete('/:id', login, (req, res) => {
    ClientesControllers.deletaCliente(req, res)
});



export default produtosRouter