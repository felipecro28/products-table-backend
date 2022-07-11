import {
    Model,
    Sequelize
} from "sequelize";
import database from "../config/db.js";

class Produtos extends Model {}
Produtos.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigoDoProduto: {
        type: Sequelize.INTEGER,
        autoIncrement: false
    },
    descricao: {
        type: Sequelize.STRING,
    },

    unidadeDeMedida: {
        type: Sequelize.STRING,
    },
    valorDeCompra: {
        type: Sequelize.INTEGER,
    },
    valorDeVenda: {
        type: Sequelize.INTEGER,
    }

}, {
    sequelize: database,
    modelName: 'Produto',
    timestamps: false
})

export default Produtos