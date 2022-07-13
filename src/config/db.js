import Sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()



  //*// CRIANDO A CONEXÃO COM O BANCO DE DADOS //*//

const database = new Sequelize(process.env.DB_DATABASE_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,  
    dialect: "mysql"
  });

console.log(process.env.DB_DATABASE_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, process.env.DB_HOST)


export default database

  
