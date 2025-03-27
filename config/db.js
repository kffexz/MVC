const mysql = require('mysql2');

// Configurar a conexão com o banco de dados
const connection = mysql.createConnection ( {
 host: '127.0.0.1',
 user: 'root',
 port: 3302,
 password: "aluno", //sua senha de banco de dados
 database: 'mvc', // Certifique-se de que o banco de dados existe
});

// Conectar ao bano de dados
connection.connect((err) => {
 if (err) {
  console.error('Erro de conexão: ' + err.stack);
  return;
 }
 console.log('Conectado como ID ' + connection.threadID);
});

// Exportar a conexão como uma Promise
module.exports = connection.promise ();