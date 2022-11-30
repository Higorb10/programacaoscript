// vai requisitar uma API
async function cadastrar(){
    // recuperar os dados do usuário
    let id = document.getElementById("id").value
    let nome_time = document.getElementById("nome").value
    let cidade = document.getElementById("tipo").value
    let classificacao = document.getElementById("poder").value
    let pontos = Number(document.getElementById("nota").value)
    let dado
    let metodo // vai conter POST ou PUT
    if (id) { // vai atualizar
        metodo = 'PUT'
        dado = {
            id, nome_time, cidade, classificacao, pontos
        }
    }
    else { // cadastrar
        metodo = 'POST'
        dado = {
            id, nome_time, cidade, classificacao, pontos
        }
    }
    // criar o dado para enviar
    
    // chamar ou consumir a API utilizando fetch
    await fetch('http://localhost:3000/api/products', {
        method: metodo,
        body: JSON.stringify(dado),
        headers: {"Content-Type": "application/json; charset=UTF-8"}
    })
    .then(resposta => {
        alert('Cadastro foi realizado com sucesso')
    })
    .catch( error => {
        alert(error)
    })
    consultar()
}

async function consultar(){
    // consome a API e recupera os times
    let dados = await fetch('http://localhost:3000/api/index')
    .then( response => {
        return response.json() // atribui os dados em json para dados
    })  
    .catch(error => {
        alert(error)
    })
    // percorrer a variável dados
    // vamos criar uma variável result para concatenar resposta
    let resposta = ''
    dados.map (dado => {
        resposta += `<tr><td> ${dado.nome_time} </td> <td> ${dado.cidade} </td><td> ${dado.classificacao} </td> <td> ${dado.pontos} </td> <td> <i onClick='remove(${dado.id})' class='bi bi-trash'></i> </td> <td> <i onClick="atualiza(${dado.id}, '${dado.nome_time}', '${dado.cidade}', '${dado.classificacao}', ${dado.pontos})" class='bi bi-pencil'></i></td> </tr>`
    })
    // colocar a resposta no body da tabela
    document.getElementById("conteudoTabela").innerHTML = resposta
}

// remove um time do banco de dados
// quem chamar a função remove pode fazer outra ação antes de
// receber resposta
async function remove(id){
    let confirma = confirm(`Confirma exclusão do time? `)
    if (confirma){ // confirma é true
        // chama a api -> é síncrona (aguardamos o retorna do servidor)
        await fetch(`http://localhost:3000/api/apagar/${id}`, {
            method:'DELETE'
        })
        .then (response => { // quando o servidor retornou
            alert(`O time foi removido com sucesso`)
            consultar()
        })
        .catch( error => { // houve erro na comunicação com servidor
            alert(`Problema na remoção`)
        })
    }
    
}

function atualiza(id, nome_time, cidade, classificacao, pontos){
    // insere no formulário os dados do Time que será atualizado
    document.getElementById("id").value = id
    document.getElementById("nome").value = nome_time
    document.getElementById("tipo").value = cidade
    document.getElementById("poder").value = classificacao
    document.getElementById("nota").value = pontos
}