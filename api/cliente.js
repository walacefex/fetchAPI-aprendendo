//promises Javascript
//GET
const listarClientes  = ()  => {
     return fetch('http://localhost:4000/clientes')
    .then(resposta =>{
        return resposta.json()
    })
    .then(json =>{
        console.log(json)
        return json
    })
}

//POST
const cadastrarClientes = (nome, cpf) => {
    const Json = JSON.stringify({
    nome: nome,
    cpf:  cpf 
    })
    return fetch('http://localhost:4000/clientes/cliente',{  
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: Json
    })    
    .then(respo =>{
         return respo.body
    })
}
