import {
    Model,
    Sequelize
} from "sequelize";
import database from "../config/db.js";

class Clientes extends Model {}
Clientes.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    razaoSocial: {
        type: Sequelize.STRING,
    },
    CNPJ: {
        type: Sequelize.STRING,
    },

    endereco: {
        type: Sequelize.STRING,
    }

}, {
    sequelize: database,
    modelName: 'Cliente',
    timestamps: false
})

export default Clientes