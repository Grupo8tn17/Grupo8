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


//adicionar quantidade através do botão "+"

addIcon.addEventListener("click", function () {
  let newCounter = parseInt(quantity.innerText);
  if (newCounter >= 1) {
   let valor = newCounter + 1
    quantity.innerText = valor;    
  }  
  localStorage.setItem("cart", JSON.stringify(cart));
});

//remover quantidade através do botão "-"

removeIcon.addEventListener("click", function () {
  let counter = parseInt(quantity.innerText);
  if (counter != 0 && counter > 1) {
    let valor = newCounter - 1
    quantity.innerText = valor;
    atualizarCarrinho(valor, id);
  }
  
});

//remover produto do carrinho pelo botão X

removeProduct.addEventListener("click", function(){
  //escrever código
  
  localStorage.setItem("cart", JSON.stringify(novoCart));
})
 

//mostrar carrinho vazio:

if(cart.length <= 0){
  mostrar o carrinho vazio
}


//somando o total do carrinho:

let subtotal = 0;
let desconto = 0;
let frete = 0;
let total = 0;

//em cada item pegar o subtotal
subtotal += cart[i].price * cart[i].quantity

total = subtotal - frete 
