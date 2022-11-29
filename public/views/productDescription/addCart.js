var btnAddCart = document.querySelector(".top");
var nameProduct = document.querySelector(".primeira1-1");
var price = document.querySelector(".preço");
var imageProduct = document.querySelector(".imagemProduto");
var quantity = document.querySelectorAll(".form-control")[1];
let quantityValue = 0;
let cart = [];


quantity.oninput = function (){
    
    quantityValue = quantity.value;
}

btnAddCart.onclick = function (){
    const product = {
        name: nameProduct.innerText,
        price: price.innerText,
        image: imageProduct.src,
        quantity: quantityValue,
    }
    if (!localStorage.getItem("cart")){
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
    } else {
        const cartObject = JSON.parse(localStorage.getItem("cart"))
        cartObject.forEach(produto => {
            if(produto.name == product.name){
                produto.quantity += produto.quantity 
            } else {
                cartObject.push(product)
            }
        });
        localStorage.setItem("cart", JSON.stringify(cartObject))
        
    }

}