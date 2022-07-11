import Sequelize from 'sequelize';

  //*// CRIANDO A CONEXÃO COM O BANCO DE DADOS //*//

const database = new Sequelize('heroku_43e2f81835bcbf7', 'b75bf626251fd0', '2398153a', {
    host: 'us-cdbr-east-06.cleardb.net',  
    dialect: "sqlite"
  });

export default database

  
