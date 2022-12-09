//buscando o produto no localStorage
const productsCart = localStorage.getItem("cart")

const objectCart = JSON.parse(productsCart)
const product = objectCart.id
//selecionando o elemento/tag onde o produto será adicionado no HTML
const indexProductsProducts = document.querySelector(".indexProductsProducts")

//adicionando o novo produto ao HTML
indexProductsProducts.innerHTML = '<a>' + 
                                   '<span>' + objectCart[0].id + '</span>'+
                                  '</a>'

//adicionando a quantidade dess produto no localStorage
const input = document.querySelector("body div input")
const quantidade = objectCart[0].quantity

input.value = quantidade



