import Sequelize from 'sequelize';
import dotenv from 'dotenv'
 
dotenv.config()

const database = new Sequelize(process.env.DB_DATABASE_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,  
    dialect: "sqlite"
  });

export default database