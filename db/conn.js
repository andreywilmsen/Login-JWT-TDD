let mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/guiapics", { useNewUrlParser: true, useUnifiedTopology: true });

// Capturando eventos de conexão
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', () => {
    console.log('Banco de dados conectado com sucesso!');
});

module.exports = db;