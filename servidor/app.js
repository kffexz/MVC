const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res)=>{

    res.send('Olá mundo!!!!!!')

});

app.listen(PORT, ()=>{
    console.log('servidor rodando na porta ', PORT);
})