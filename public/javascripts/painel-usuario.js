
const btnAbreModalDados = document.querySelector(".editar-dados");
const modalDados = document.querySelector(".modal-dados");
const btnCancelarDados = document.querySelector(".cancelar-dados");

const btnAbreModalEnderecoEditar = document.querySelector(".editar-endereco");
const modalEnderecoEditar = document.querySelector(".modal-endereco-editar");
const btnCancelarEnderecoEditar = document.querySelector(".cancelar-endereco-editar");

const btnAbreModalEnderecoCadastrar = document.querySelector(".cadastrar-endereco");
const modalEnderecoCadastro = document.querySelector(".modal-endereco-cadastro");
const btnCancelarEnderecoCadastrar = document.querySelector(".cancelar-endereco-cadastrar")
 

btnAbreModalDados.onclick = function () {
    modalDados.showModal()
}

btnCancelarDados.onclick = function () {
    modalDados.close()
}

btnAbreModalEnderecoEditar.onclick = function () {
    modalEnderecoEditar.showModal()
}

btnCancelarEnderecoEditar.onclick = function () {
    modalEnderecoEditar.close()

}

btnAbreModalEnderecoCadastrar.onclick = function () {
    modalEnderecoCadastro.showModal()
}

btnCancelarEnderecoCadastrar.onclick = function () {
    modalEnderecoCadastro.close()

}