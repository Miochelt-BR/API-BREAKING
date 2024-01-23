const express = require('express')
const app = express()
//ROTA
//METHOD HTTP COMO NOS COMUNICAMOS COM CLIENTE E SERVIDOR  - CRUD(CREATE READ UPDATE DELETE )
//METHOD POST - CRIA UMA INFO
//METHOD GET -BUSCA UMA INFO 
//METHOD PUT - ALTERA UMA INFO
//METHOD DELETE APAGA UMA INFO
//METHOD PATCH ALTERA PARTE DA INFO

//NAME
//funcao anonima (callback) responsavel por executar algum comando porque callback chamada por traz de uma outra funcao  
app.get("/ route", (req, res)=>{});


app.listen(3000)