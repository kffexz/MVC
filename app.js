const express = require('express');
const clienteController = require('./controllers/clienteController');

const app = express(); // Instância do Express
const PORT = 3000; //Porta para o servidor

const path = require('path');

// Servir arquivos estáticos como HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Middleware para tratar os dados no formato JSON

app.get('/update', () => {
    res.sendFile(path.join(__dirname, 'public', 'update.html'));
});

app.put('/api/clientes/:id', clienteController.updateClient); // Rota para atualizar o cliente
app.get('/api/clientes', clienteController.getAllClients); // Rota para obter todos os clientes
app.post('/api/clientes', clienteController.createNewClient); //Rota para adicionar um novo cliente

app.listen(PORT, () => {
    console.log(`Servidor na porta http://localhost:${PORT}`);
});