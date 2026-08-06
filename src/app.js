const express = require('express');
const app = express();

const motoRoutes = require('./routes/motoRoutes');

app.use(express.json());
app.use('/motos', motoRoutes);

app.get('/', (req,res) => {
    res.send('Bem vindo a API.')
})

module.exports = app;