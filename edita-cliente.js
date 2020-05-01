const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get(`id`);

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

//trazendo os dados do cliente do ID
detalhaCliente(id).then(dados =>{
    inputCPF.value = dados[0].cpf 
    inputNome.value = dados[0].nome
})

const formEdicao = document.querySelector('[data-form]');
const mensgasagemSucesso = (mensagem) => {
    const linha = document.createElement("tr");

    const conteudoLinha =`
    <div class="alert alert-success" role="alert">
    ${mensagem}
    </div>
`;

    linha.innerHTML = conteudoLinha;
    return linha;
}
const mensgasagemErro = (mensagem) => {
    const linha = document.createElement("tr");

    const conteudoLinha =`
    <div class="alert alert-warning" role="alert">
    ${mensagem}
    </div>
`;

    linha.innerHTML = conteudoLinha;
    return linha;
}

formEdicao.addEventListener('submit', event => {
    event.preventDefault();

    if(!validaCPF(inputCPF.value)){
        alert('Esse CPF não existe');
        return
    }
    editaCliente(id, inputCPF.value, inputNome.value).then(resposta => {
        if(resposta.status === 200){
            formEdicao.appendChild(mensgasagemSucesso('Cliente editado com sucesso! '))
        }else{
            formEdicao.appendChild(mensgasagemErro('Erro na edição do cliente'))
        }
    })
})