const cartContainer = document.querySelector(".table-cart-container");
const cartProduct = document.querySelectorAll(".cart-product");
const removeIcon = document.querySelector(".cart-remove-icon");
const addIcon = document.querySelector(".cart-add-icon");
const quantity = document.querySelector(".quantity-product");
const removeProduct = document.querySelectorAll(".cart-product button");
var removeCart = document.getElementById('remove-product');
const cartInvisible = document.querySelector('.cart-invisible');
const quantidade = parseInt(quantity.value);
var productsCart = document.querySelectorAll('.products-cart');
let contador = parseInt(quantity.innerText);

//adicionar ou remover quantidade

addIcon.addEventListener("click", function () {
    let newCounter = parseInt(quantity.innerText);
    if(newCounter >= 1) {
        quantity.innerText = newCounter + 1;
    }
});

removeIcon.addEventListener("click", function () {
  let counter = parseInt(quantity.innerText);
  if(counter != 0 && counter > 1) {
    quantity.innerText = counter - 1;
  }
});


removeCart.addEventListener("click", function () {
    cartProduct[i].remove();
    //cartInvisible.setAttribute('style', 'display: block');
});