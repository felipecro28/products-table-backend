import Sequelize from 'sequelize';

  //*// CRIANDO A CONEXÃO COM O BANCO DE DADOS //*//

const database = new Sequelize(process.env.DB_DATABASE_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,  
    dialect: "mysql"
  });

export default database

  
