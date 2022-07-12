import sequelize from "sequelize";
import Clientes from "../models/Clientes.js";

class ClientesControllers {

    static async listAll (req, res){
        try {
            const clientes = await Clientes.findAll()
            res.status(200).json(clientes) 
        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }

    static async listOne(req, res){
        try {
            const id = req.params.id
            const cliente =  await Clientes.findByPk(id)
            cliente != null ? res.status(200).json(cliente) : res.status(400).json(({ Error: 'cliente não encontrado' }))

        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }

    static async criarCliente(req, res){
        try {
            await Clientes.create(req.body)
            res.status(200).json('cliente cadastrado com sucesso')
        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }

    static async editarCliente(req, res){
        try {
            const id = req.params.id
            Clientes.update(
                req.body,
                {
                    where: {
                        id : id
                    }
                }
            )
            res.status(400).json('cliente alterado com sucesso')
        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }
    static async deletaCliente(req, res){
        try {
            const id = req.params.id
            Clientes.destroy(
                {
                    where: {
                        id : id
                    }
                }
            )
            res.status(400).json('cliente deletado com sucesso')
        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }
}

export default ClientesControllers