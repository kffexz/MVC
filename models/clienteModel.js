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

    updateCliente: async (id, nome, cpf) => {
        try {
            if (!id) {
                throw new Error('ID do cliente é necessário');
            }

            const [result] = await db.execute('UPDATE cliente SET nome = ? , cpf = ? WHERE id = ? ', [id, nome, cpf]);

            if (result.affectedRows === 0) {
                throw new Error('Cliente não encontrado')
            }

            return { id, nome, cpf }
        } catch (error) {
            throw error;

        }
    }
};
module.exports = Cliente;