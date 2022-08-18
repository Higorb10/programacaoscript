//chamar a biblioteca express
const express = require('express');

//armazenar na váriavel server a biblioteca express()
const server = express();

//chamar a função Listen para "escutar a porta em que vamos utilizar"
server.listen(8080);

//criando a ROTA get para testar a API
/*server.get('/teste', (req, res) => {
    return res.json({teste: 'deu word'});
})*/

/*server.get('/teste', (req, res) => {
    const escola = req.query.escola;
    return res.json({teste: `Estamos estudando na ${escola}`});
})*/

/*server.get('/teste', (req, res) => {
    const nome = req.query.escola;
    return res.json({teste: `Eu juro solenemente nunca fazer ${nome}`});
})*/

server.get('/teste/:id', (req, res) => {
    const id = req.params.id;
    return res.json({teste: `Id da escola: ${ id }`});
})