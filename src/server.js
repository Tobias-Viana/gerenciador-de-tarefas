const express = require('express');
const app = express();
const PORT = 3000;

// Conexão com o banco de dados
const db = require('./config/db');
db.connect()
  .then(() => console.log('Conectado ao banco de dados!'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

// Middleware para processar JSON
app.use(express.json());

// Rotas
const routes = require('./routes/index.js');
app.use('/', routes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});