var btnAddCart = document.querySelector(".add-cart");
var idProduct = document.querySelector(".code-product");
var quantity = document.querySelector(".quantity-products");
var price = document.getElementById("price");
var img = document.getElementById("img-product").src;
var title = document.querySelector(".title-product h3");

var cart = [];

btnAddCart.onclick = function () {
  var newProduct = {
    id: idProduct.innerText,
    quantity: parseInt(quantity.innerText),
    price: parseFloat(price.innerText.replace(",", ".")),
    title: title.innerText,
    img,
  };

  console.log(newProduct);
  cart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (!cart.length) {
    cart.push(newProduct);
  } else {
    const prod = cart.find((produto) => produto.id == newProduct.id);
    if (!prod) {
      cart.push(newProduct);
    } else {
      prod.quantity += newProduct.quantity;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
