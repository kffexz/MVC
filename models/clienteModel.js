const db = require('../config/db'); // Importe a configuração do banco de dados

const Cliente = {
    getAllClients: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM cliente');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    createNewClient: async (nome, cpf) => {
        try {
            const [result] = await db.execute('INSERT INTO Cliente (nome, cpf) VALUES (?,?)', [nome, cpf]);
            return { id: result.insertId, nome, cpf };
        } catch (error) {
            throw error;
        }
    },

    updateClient: async (id, nome, cpf) => {
        try {
          // Verifique se o ID é válido
          if (!id) {
            throw new Error('ID do cliente é necessário');
          }
    
    
          // Atualize o cliente no banco de dados
          const [result] = await db.execute('UPDATE Cliente SET nome = ?, cpf = ? WHERE id = ?', [nome, cpf, id]);
    
    
          // Verifique se algum registro foi alterado
          if (result.affectedRows === 0) {
            throw new Error('Cliente não encontrado');
          }
    
    
          return { id, nome, cpf };
        } catch (error) {
          throw error;
        }
      }
};
module.exports = Cliente;