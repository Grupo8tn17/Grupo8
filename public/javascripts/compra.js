
const btnAbreModalEndereco = document.querySelector(".editar-endereco");
const modalEndereco = document.querySelector(".modal-endereco");
const cepInput = document.querySelector('#cep');
const inputLogradouro = document.querySelector('#logradouro');
const inputBairro = document.querySelector('#bairro');
const inputCidade = document.querySelector('#cidade');
const inputEstado = document.querySelector('#uf');
 

btnAbreModalEndereco.onclick = function () {
    modalEndereco.showModal()
}


cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]|\./;
    const key = String.fromCharCode(e.keyCode);
  
    console.log(key);
  
    console.log(onlyNumbers.test(key));
  
    // allow only numbers
    if (!onlyNumbers.test(key)) {
      e.preventDefault();
      return;
    }
  });

cepInput.addEventListener('keyup', (e) => {
    const inputValue = e.target.value;  
    console.log(inputValue);

    if(inputValue.length === 8) {
        pegaEndereco(inputValue);
    }
});

const pegaEndereco = async (cep) => {
    const mensagemErro = document.querySelector('.mensagem-erro');
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data); 

    if(data.erro == "true") {
        alert("CEP inválido, tente novamente!");
    }

    inputLogradouro.value = data.logradouro;
    inputBairro.value = data.bairro;
    inputCidade.value = data.localidade;
    inputEstado.value = data.uf;
}


