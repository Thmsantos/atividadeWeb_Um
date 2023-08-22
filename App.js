const express = require('express')
const app = express();
app.use(express.json());
const path = require('path')

app.get('/teste', function(req, res){
    const diretorio = {
        root: path.join(__dirname)
    };

    const arquivo = './cliente/pageUm.html';

    res.sendFile(arquivo, diretorio)
})

app.listen(5421, () => {
    console.log('rodando..')
})

