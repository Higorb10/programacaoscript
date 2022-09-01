const express = require('express');

const server = express();
server.use(express.json());
server.listen(8080);

let nomes = ['Clarck', 'Bruce', 'Louis', 'Dianna'];

//#region CRUD

//Create de um valor
server.post('/nomes', (req, res) => {
    const { name } = req.body
    nomes.push(name);
    return res.json(nomes);
    //return res.send(<h1> Cadastro concluido com sucesso</h1>)
    //return res.json("message": "cadastro concluido com sucesso"})
})

//Read de vários valores
server.get('/nomes/:index', (req, res) => {
    return res.json(nomes);
})


//Read de um, único valor
server.get('/nomes/:index', (req, res) => {
    const { index } = req.params;
    return res.send(
        `<!DOCTYPE html>
        <body style = "text-aling:center">
        <h1>Desafio!</h1>
        <h1>Bem Vindo <b style = "color:red">${nomes[index]}</b> </h1>
        <p>Parabens esta é a primeira conexão back e front</p>

        </body>
        </html>`
    )
})


