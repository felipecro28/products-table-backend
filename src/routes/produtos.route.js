import express from 'express'
import ProdutosControllers from '../controllers/produtosController.js'
import login from '../../middleware/login.js';

const produtosRouter = express.Router()


produtosRouter.get('/', (req, res) => {
    ProdutosControllers.listAll(req, res)
}
);

produtosRouter.get('/:id', async (req, res) => {
    ProdutosControllers.listOne(req, res)
});

produtosRouter.post('/', login, (req, res) => {
    ProdutosControllers.criarProduto(req, res)
});

produtosRouter.patch('/:id', login, (req, res) => {
    ProdutosControllers.editarProduto(req, res)
});

produtosRouter.delete('/:id',login, (req, res) => {
    ProdutosControllers.deletaProduto(req, res)
});



export default produtosRouter