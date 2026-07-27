const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Bem vindo a API.')
})

module.exports = app;