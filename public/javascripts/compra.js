
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

function alteraCEP () {
    const textCep = document.querySelectorAll('.text-cep');
    console.log(textCep);

    for(let i = 0; i < textCep.length; i++) {
        let cepFormatado = textCep[i].innerHTML
        console.log(cepFormatado);
        cepFormatado.split('-',5);

        textCep[i].innerHTML = "<strong>CEP: </strong> 0" + cepFormatado
    }
}

alteraCEP();

function somaTotal() {
    let valorProdutos = document.querySelectorAll('.valor-produto');
    const valorFrete = document.querySelector('.valor-frete');
    let valorTotal = document.querySelector('.valor-total');
    let valorSub = document.querySelector('.valor-sub');
    let subtotal = document.querySelector('.subtotal');
    let total = document.querySelector('.total');
    let freteValor = document.querySelector('.frete-valor');

    console.log()

    window.addEventListener('load', (e) => {
        e.preventDefault();
        let soma = 0
        for(let i = 0; i < valorProdutos.length; i++ ) {
            soma = soma + parseFloat(valorProdutos[i].innerHTML);
            
        }
        valorSub.innerHTML = soma.toFixed(2).replace('.', ',');
        let resultado = soma + parseFloat(valorFrete.innerHTML);
        console.log(resultado);
        valorTotal.innerHTML = resultado.toFixed(2).replace('.', ',');

        subtotal.value = soma;
        total.value = resultado;
        freteValor.value = parseFloat(valorFrete.innerHTML);


    })
}

somaTotal();


function pegarData() {
    const dataPedido = document.querySelector('.data_pedido');
    let data = new Date();
    let mes = data.getUTCMonth() + 1;

    window.addEventListener('load', () => {
        let dataAtual = data.getDate() +'/'+ mes +'/'+ data.getFullYear();
        console.log(dataAtual);
        dataPedido.value = dataAtual;
    })
}

pegarData();

function pegarProdutos() {
    const formFinaliza = document.querySelector('.form-finaliza');
    let produtosCarrinho = document.querySelector('.produto-local');
  
    formFinaliza.addEventListener('submit', (e) => {
      e.preventDefault();
      let objectCart = JSON.parse(localStorage.getItem("cart") || []);



      produtosCarrinho.value = JSON.stringify(objectCart);
      formFinaliza.submit();
    })
  }
  
  pegarProdutos();
  
