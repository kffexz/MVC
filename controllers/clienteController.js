const ClienteModel = require('../models/clienteModel');

const clienteController = {
 getAllClients: async (req,res) => {
  try {
   const clients = await ClienteModel.getAllClients();
   res.status(200).json(clients);
  } catch (error) {
   console.error('Erro ao obter lista de clientes: ', error); // Adiciona um log para depuração
   res.status(500).json({ error: 'Erro ao obter lista de clientes.'});
  }
 },
 createNewClient: async (req,res) => {
  const {nome,cpf} = req.body;
  try {
   if (!nome || !cpf) {
    return res.status(400).json({ error: 'Nome e CPF são obrigatórios.'});
   }
   const newClient = await ClienteModel.createNewClient(nome,cpf);
   res.status(201).json(newClient);
  }catch (error) {
   console.error('Erro ao criar novo cliente:', error); // Adiciona um log para depuração
   res.status(500).json({ error: 'Erro ao criar novo cliente.'})
  }
 }
};

module.exports = clienteController;