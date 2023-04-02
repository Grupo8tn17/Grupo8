
const btnAbreModalDados = document.querySelector(".editar-dados");
const modalDados = document.querySelector(".modal-dados");
const btnCancelarDados = document.querySelector(".cancelar-dados");
const btnAbreModalEndereco = document.querySelector(".editar-endereco");
const modalEndereco = document.querySelector(".modal-endereco");
const btnCancelarEndereco = document.querySelector(".cancelar-endereco");
 

btnAbreModalDados.onclick = function () {
    modalDados.showModal()
}

btnCancelarDados.onclick = function () {
    modalDados.closest()
}

btnAbreModalEndereco.onclick = function () {
    modalEndereco.showModal()
}

btnCancelarEndereco.onclick = function () {
    modalEndereco.closest()
}