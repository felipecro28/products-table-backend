import sequelize from "sequelize";
import Usuarios from "../models/Usuarios.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

class UsuariosControllers {

    static async listAll(req, res) {
        try {
            const usuarios = await Usuarios.findAll()
            res.status(200).json(usuarios)
        } catch (error) {
            res.status(400).json(({
                Error: error.message
            }))
        }
    }

    static async listOne(req, res) {
        try {
            const id = req.params.id
            const usuario = await Usuarios.findByPk(id)
            usuario != null ? res.status(200).json(usuario) : res.status(400).json(({
                Error: 'usuário não encontrado'
            }))

        } catch (error) {
            res.status(400).json(({
                Error: error.message
            }))
        }
    }

    static async criarUsuario(req, res) {
        try {
            await Usuarios.create(req.body)
            res.status(200).json('Usuário criado com sucesso')
        } catch (error) {
            res.status(400).json(({
                Error: error.message
            }))
        }
    }

    static async editarUsuario(req, res) {
        try {
            const id = req.params.id
            Usuarios.update(
                req.body, {
                    where: {
                        id: id
                    }
                }
            )
            res.status(400).json('Usuário alterado com sucesso')
        } catch (error) {
            res.status(400).json(({
                Error: error.message
            }))
        }
    }

    static async deletaUsuario(req, res) {
        try {
            const id = req.params.id
            Usuarios.destroy({
                where: {
                    id: id
                }
            })
            res.status(400).json('Usuário deletado com sucesso')
        } catch (error) {
            res.status(400).json(({
                Error: error.message
            }))
        }
    }

    static async realizarLogin(req, res) {
        try {
            const usuario = await Usuarios.findAll({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            });
            if (usuario.length > 0) {
                let token = jwt.sign({
                    id_usuario: usuario.id,
                    username: usuario.username,
                }, process.env.JWT_TOKEN, {
                    expiresIn: 500
                })
                return res.status(200).json({
                    Message: 'Login realizado com sucesso',
                    token: token
                })
            }
            return res.status(401).json({
                Error: 'Falha na autenticação'
            })
        } catch (error) {
            res.status(400).json({
                Error: error.message
            })
        }
    }
}



export default UsuariosControllers