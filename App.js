const express = require('express')
const app = express();
const { router } = require('./pags/telaUm')

/* app.get('/', function(req, res){
    res.send(Psg())
    console.log(Psg, 'hha')
}) */

app.use('/', router)

app.listen(5421, () => {
    console.log('rodando..')
})