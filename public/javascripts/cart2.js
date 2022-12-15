const cartContainer = document.querySelector(".table-cart-container");
const cartProduct = document.querySelectorAll(".cart-product");
const removeIcon = document.querySelector(".cart-remove-icon");
const addIcon = document.querySelector(".cart-add-icon");
const quantity = document.querySelector(".quantity-product");
const removeProduct = document.querySelectorAll(".cart-product button");
var removeCart = document.getElementById("remove-product");
const cartInvisible = document.querySelector(".cart-invisible");
const quantidade = parseInt(quantity.value);
var productsCart = document.querySelectorAll(".products-cart");
let contador = parseInt(quantity.innerText);

const cart = JSON.parse(localStorage.getItem('cart'))

let atualizarCarrinho = (valor, id) => {
  let novoCart = cart((item) => {if(item.id == id) {
   if(valor <= 0){
    localStorage.remove(cart, id)
   }else{
    item.quantity = valor
}
  }})
  localStorage.setItem("cart", JSON.stringify(novoCart));
};

//adicionar ou remover quantidade

addIcon.addEventListener("click", function () {
  let newCounter = parseInt(quantity.innerText);
  if (newCounter >= 1) {
   let valor = newCounter + 1
    quantity.innerText = valor;
    atualizarCarrinho(valor, id);
  }
});

removeIcon.addEventListener("click", function () {
  let counter = parseInt(quantity.innerText);
  if (counter != 0 && counter > 1) {
    let valor = newCounter - 1
    quantity.innerText = valor;
    atualizarCarrinho(valor, id);
  }
  
});

//remover produto do carrinho

const carrrinho = JSON.parse(localStorage.getItem("carrinho")); //cria o carrinho no localStorage
const nomeDoBotao = document.querySelectorAll(".classe-do-botão");

nomeDoBotao.forEach((btn) => {
  btn.onclick = () => {
    const containerItem = btn.parentElement.parentElement;
    if (btn.id == containerItem.className) {
      containerItem.remove();
      atualizarCarrinho();
    }
  };
});

