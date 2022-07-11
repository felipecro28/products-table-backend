import sequelize, {
    Model,
    Sequelize
} from "sequelize";
import database from "../config/db.js";

class Usuarios extends Model {}
Usuarios.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING,
    },

    password: {
        type: Sequelize.STRING,
    }

}, {
    sequelize: database,
    modelName: 'Usuario',
    timestamps: false
})

export default Usuarios