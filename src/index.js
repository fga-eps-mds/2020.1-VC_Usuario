const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Vamos Cuidar Back End');
});
    
app.listen(PORT, HOST);
console.log('Vamos Cuidar BackEnd inicializado com sucesso')