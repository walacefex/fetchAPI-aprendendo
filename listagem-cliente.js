
const corpoTabela = document.querySelector("[data-conteudo-tabela]");

/*Função para criar a linha da tabela, inserir o valor passado nas tr */
const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        `;

    linha.innerHTML = conteudoLinha;
    return linha;
}
//Passando pelo todo array e interar
listarClientes().then(exibe => {
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
    })
})