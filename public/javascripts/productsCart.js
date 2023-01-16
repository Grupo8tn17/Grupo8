//buscando o produto no localStorage
var productsCart = localStorage.getItem("cart");

var objectCart = JSON.parse(productsCart);

//adiciona uma nova linha na tabela

//selecionando o elemento/tag onde o produto será adicionado no HTML
var cartProduct = document.querySelector(".cart-product"); //tbody
function toReal(price) {
  return price.toFixed(2).replace(".", ",");
}
function subtotal(quantity, price) {
  return toReal(Number(price * quantity));
}

//adicionando o novo produto ao HTML

for (var i = 0; i <= objectCart.length - 1; i++) {
  cartProduct.innerHTML +=
    '<tr class="item-product">' +
    '<td style="min-width: 7rem;">' +
    objectCart[i].id +
    "</td>" +
    "<td>" +
    '<div class="image-product" rowspan="2">' +
    '<img src="' +
    objectCart[i].img +
    '">' +
    "<span>" +
    objectCart[i].title +
    "</span>" +
    "</div>" +
    "</td>" +
    '<td style="min-width: 7rem;"> R$ <span>' +
    toReal(objectCart[i].price) +
    "</span></td>" +
    '<td style="width: 10rem;"> ' +
    "<div>" +
    '<button id="btnAdd" onclick="this.nextElementSibling.value++">+</button>' +
    '<span class="quantity">' +
    objectCart[i].quantity +
    "</span>" +
    '<button id="btnRemove" onclick="this.previousElementSibling.value--">-</button>' +
    "</div>" +
    "</td>" +
    "<td>" +
    "R$" +
    subtotal(objectCart[i].quantity, objectCart[i].price) +
    "</td>" +
    '<td style="width: 8rem;">' +
    '<button onclick="this.nextElementSibling.value++" id="buttonX"> X </button>' +
    "</td>" +
    "</tr>";
}
