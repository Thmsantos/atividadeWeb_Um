const express = require('express');
const app = express();
app.use(express.json());
const path = require('path')
const router = express.Router();

function Psg(req, res){

        const diretorio = {
            root: path.join(__dirname)
        };
    
        const arquivo = '../cliente/index.html';
    
        res.sendFile(arquivo, diretorio)
  
}

router
    .get("/psg", Psg)

module.exports = router;