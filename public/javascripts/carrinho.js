function subtractItem() {
  console.log(this);
  let id = this.closest("tr").id;
  let elementQtd = document.querySelector('tr[id="' + id + '"] .quantity');
  let elementPrice = document.querySelector('tr[id="' + id + '"] .price');
  let elementSubtotal = document.querySelector('tr[id="' + id + '"] .subtotal');
  let qtd = Number(elementQtd.innerText);
  let price = elementPrice.innerText.replace(",", ".");
  let subtotalItem = Number(elementSubtotal.innerText);

  if (qtd != 0 && qtd > 1) {
    qtd -= 1;
    subtotalItem = subtotal(qtd, price);
    elementQtd.innerText = qtd;
    elementSubtotal.innerText = subtotalItem.replace(".", ",");
  }
  updateItemQtd(id, qtd);
}

function addItem() {
  let id = this.closest("tr").id;
  let elementQtd = document.querySelector('tr[id="' + id + '"] .quantity');
  let elementPrice = document.querySelector('tr[id="' + id + '"] .price');
  let elementSubtotal = document.querySelector('tr[id="' + id + '"] .subtotal');
  let qtd = Number(elementQtd.innerText);
  let price = elementPrice.innerText.replace(",", ".");
  let subtotalItem = Number(elementSubtotal.innerText);

  if (qtd >= 0) {
    qtd += 1;
    subtotalItem = subtotal(qtd, price);
    elementQtd.innerText = qtd;
    elementSubtotal.innerText = subtotalItem.replace(".", ",");
  }

  updateItemQtd(id, qtd);
}

function calcularTotal() {
  const subtotais = document.querySelectorAll(".subtotal");
  let resultado = 0;
  subtotais.forEach((subtotal) => {
    let preco = subtotal.innerText.replace(",", ".");
    resultado += parseFloat(preco);
  });

  return resultado.toFixed(2).replace(".", ",");
}

function updateTotal() {
  document.querySelector(".resultado").innerText = calcularTotal();
}

function toReal(price) {
  console.log(price);
  return price.toFixed(2).replace(".", ",");
}

function subtotal(quantity, price) {
  return toReal(Number(price * quantity));
}

function updateItemQtd(id, quantity) {
  const productsCart = JSON.parse(localStorage.getItem("cart")) || [];
  productsCart.forEach((item) => {
    if (item.id == id) {
      item.quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(productsCart));
    }
    updateTotal();
    somaTotal();
  });
}

function removeItem() {
  let id = this.closest("tr").id;
  let item = this.closest("tr");
  item.remove();
  let productsCart = JSON.parse(localStorage.getItem("cart")) || [];
  productsCart = productsCart.filter((item) => item.id != id);
  localStorage.setItem("cart", JSON.stringify(productsCart));
  updateTotal();
  somaTotal();
  if (productsCart.length < 1) {
    showEmptyCart();
  }
}

function showEmptyCart() {
  let cartEmpty = document.querySelector(".cart-empty");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length == 0) {
    meuCarrinho.style.display = "none";
    cartEmpty.classList.remove("cart-invisible");
  }
}

function buildCart() {
  //buscando o produto no localStorage
  let objectCart = JSON.parse(localStorage.getItem("cart")) || [];

  //selecionando o elemento/tag onde o produto será adicionado no HTML
  var cartProduct = document.querySelector(".cart-product"); //tbody

  //adicionando o novo produto ao HTML
  for (var i = 0; i <= objectCart.length - 1; i++) {
    cartProduct.innerHTML +=
      '<tr id="' +
      objectCart[i].id +
      '"<div class="item-product">' +
      '<td class="id" style="min-width: 7rem;">' +
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
      '<td style="min-width: 7rem;"> R$ <span class="price">' +
      toReal(objectCart[i].price) +
      "</span></td>" +
      '<td style="width: 10rem;"> ' +
      '<div class="button-add">' +
      '<button class="btnAdd">+</button>' +
      '<span class="quantity">' +
      objectCart[i].quantity +
      "</span>" +
      '<button class="btnSubtract">-</button>' +
      "</div>" +
      "</td>" +
      "<td>" +
      "R$ <span class='subtotal'>" +
      subtotal(objectCart[i].quantity, objectCart[i].price) +
      "</span>" +
      "</td>" +
      '<td style="width: 8rem;">' +
      '<button class="btnRemove"> X </button>' +
      "</td>" +
      "</tr>" +
      "<hr/>";
  }
}

buildCart();

const meuCarrinho = document.querySelector(".meu-carrinho"); //conteiner carrinho
const itemProduct = document.querySelector(".item-product"); // linha do produto
let quantity = document.querySelectorAll(".quantity"); // quantidade
let qtd = parseInt(quantity.innerText);
const id = document.querySelectorAll(".id");

const btnAddList = document.querySelectorAll(".btnAdd"); //botão de acrescentar qtd

btnAddList.forEach(function (btnAdd) {
  btnAdd.addEventListener("click", addItem.bind(btnAdd));
});

const btnSubtractList = document.querySelectorAll(".btnSubtract"); //botão de diminuir qtd

btnSubtractList.forEach(function (btnSubtract) {
  btnSubtract.addEventListener("click", subtractItem.bind(btnSubtract));
});

const btnRemoveList = document.querySelectorAll(".btnRemove"); // botão de remover produto do carrinho

btnRemoveList.forEach(function (btnRemove) {
  console.log(btnRemove);
  btnRemove.addEventListener("click", removeItem.bind(btnRemove));
});

updateTotal();

showEmptyCart();

function somaTotal() {
  var totalCompra = document.querySelector('.total');
  var valorFrete = document.querySelector('.valor-frete').innerText.replace(',', '.');
  var resultadoFinal = document.querySelector('.resultado').innerText.replace(',', '.');

  let resultado = parseFloat(valorFrete) + parseFloat(resultadoFinal);

  totalCompra.innerHTML = resultado.toFixed(2).replace('.', ',');
  console.log(resultado);

}

somaTotal();

function pegarProdutos() {
  const formFinaliza = document.querySelector('.form-finaliza');
  let produtosCarrinho = document.querySelector('#produtosCarrinho');

  formFinaliza.addEventListener('submit', (e) => {
    e.preventDefault();
    let objectCart = JSON.parse(localStorage.getItem("cart") || []);

    if(!objectCart.length) {
      alert('Carrinho Vazio!');
      return
    }
    
    produtosCarrinho.value = JSON.stringify(objectCart);
    formFinaliza.submit();
  })
}

pegarProdutos();

