// Config inicial
const express = require('express');
const app = express();
const mongoose = require('mongoose');
 // Verifique se o caminho está correto

// Forma de ler JSON / Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Rota inicial / Endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Oi express!' });
});

// Credenciais de conexão
const DB_USER = 'suelen';
const DB_PASSWORD = encodeURIComponent('suelen');

// Conexão com o MongoDB
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@crud.pnyyv.mongodb.net/bancoapi?retryWrites=true&w=majority&appName=CRUD`
  )
  .then(() => {
    console.log('Conectamos ao MongoDB');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((err) => console.log(err));

// Rotas da API
const personRouter = require('./routes/personRouter'); // Corrigido: importação correta

app.use('/person', personRouter); // Corrigido: uso correto da rota
