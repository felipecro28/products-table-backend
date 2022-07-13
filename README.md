# NODE.JS API

## Descrição da aplicação:
A aplicação é um ambiente back-end utilizado para simular a rotina de cadastro de clientes, usuários e produtos. Foi utilizado o banco de dados relacional Mysql, o padrão do tipo REST e como organização o conceito de arquitetura MVC.

## Ferramentas utilizadas:
- Linguagem: Javascript com NodeJS
- Framework: Express
- Banco de dados relacional: Mysql
- ORM: Sequelize
- Deploy: Heroku
-Token de segurança: JWT
- Logs: Morgan


## Rotas da api:
A API é composta por 04 rotas:
/usuarios
/clientes
/produtos
/login

Todas as funções de CRUD estão disponíveis, porém, para alterar qualquer coluna da API é necessário fornecer o JWT token, o que acontece somente com a autenticação do usuário.
Para autenticar, é recomendado que seja incluído manualmente um usuário teste no banco de dados, e, após, faça um post na rota /api/login informando username e password.

Como resposta, a API retornará um token. Para utilizá-lo, basta incluir este token Authorization/Bearer Token e substituir a palavra Token pelo código fornecido.

No front-end, ao realizar qualquer requisição que não seja um GET, será necessário passar o token como parâmetro no Headers.
