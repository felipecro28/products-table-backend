 
 import Usuarios from '../models/Usuarios.js'
 import Produtos from '../models/Produtos.js'
 import Clientes from '../models/Clientes.js'


 //*// CRIANDO AS TABELAS DO BANCO DE DADOS //*//

 Usuarios
 .sync()
 .then( () => {
     console.log('tabela criada com sucesso')
 })
 .catch(console.error);

 Produtos
 .sync()
 .then( () => {
     console.log('tabela criada com sucesso')
 })
 .catch(console.error);

 Clientes
 .sync()
 .then( () => {
     console.log('tabela criada com sucesso')
 })
 .catch(console.error);