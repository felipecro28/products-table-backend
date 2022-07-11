import express from 'express'
import UsuariosControllers from '../controllers/UsuariosController.js'
import login from '../../middleware/login.js';
const usuariosRouter = express.Router()


usuariosRouter.get('/', (req, res) => {
    UsuariosControllers.listAll(req, res)
}
);

usuariosRouter.get('/:id', async (req, res) => {
    UsuariosControllers.listOne(req, res)
});

usuariosRouter.post('/', login , (req, res) => {
    UsuariosControllers.criarUsuario(req, res)
});

usuariosRouter.post('/login', login ,(req, res, next)=> {
    UsuariosControllers.realizarLogin(req, res)
})

usuariosRouter.patch('/:id', login , (req, res) => {
    UsuariosControllers.editarUsuario(req, res)
});

usuariosRouter.delete('/:id', login , (req, res) => {
    UsuariosControllers.deletaUsuario(req, res)
});






export default usuariosRouter