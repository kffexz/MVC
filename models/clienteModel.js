const db = require ('../config/db'); // Importe a configuração do banco de dados

const Cliente = {
 getAllClients: async () => {
  try {
   const [rows] = await db.query('SELECT * FROM cliente');
   return rows;
  } catch (error) {
   throw error;
  }
 },

 createNewClient: async (nome,cpf) => {
  try {
   const [result] = await db.execute('INSERT INTO Cliente (nome, cpf) VALUES (?,?)', [nome , cpf]);
   return { id: result.insertId, nome, cpf };
  } catch (error) {
   throw error;
  }
 }
};

module.exports = Cliente;