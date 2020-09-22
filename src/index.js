const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World teste');
});
    
app.listen(PORT, HOST);
console.log('BackEnd inicializado com sucesso')