import sequelize from "sequelize";
import Produtos from "../models/Produtos.js";

class ProdutosControllers {

    static async listAll (req, res){
        try {
            const produtos = await Produtos.findAll()
            res.status(200).json(produtos) 
        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }

    static async listOne(req, res){
        try {
            const id = req.params.id
            const produto =  await Produtos.findByPk(id)
            produto != null ? res.status(200).json(produto) : res.status(400).json(({ Error: 'Produto não encontrado' }))

        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }

    static async criarProduto(req, res){
        try {
            await Produtos.create(req.body)
            res.status(200).json('Produto cadastrado com sucesso')
        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }

    static async editarProduto(req, res){
        try {
            const id = req.params.id
            Produtos.update(
                req.body,
                {
                    where: {
                        id : id
                    }
                }
            )
            res.status(400).json('Produto alterado com sucesso')
        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }
    static async deletaProduto(req, res){
        try {
            const id = req.params.id
            Produtos.destroy(
                {
                    where: {
                        id : id
                    }
                }
            )
            res.status(400).json('Produto deletado com sucesso')
        } catch (error) {
            res.status(400).json(({ Error: error.message }))
        }
    }
}

export default ProdutosControllers