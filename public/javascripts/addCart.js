var btnAddCart = document.querySelector("add-cart");
var idProduct = document.querySelector(".code-product");
var quantity = document.querySelectorAll(".quantity-product")[1];
let quantityValue = 0;
let cart = [];


quantity.oninput = function (){
    
    quantityValue = Number(quantity.value);
}

btnAddCart.onclick = function (){
    const product = {
        id: idProduct.innerText,
        quantity: quantityValue,
    } 
    console.log(product)
    if (!localStorage.getItem("cart")){
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
    } else {
        const cartObject = JSON.parse(localStorage.getItem("cart"))
        
        cartObject.forEach(produto => {
            if(produto.id == product.id){
                const quantityProduct = Number(produto.quantity)
                const soma = quantityProduct + product.quantity
                
                produto.quantity = soma

            } else {
                cartObject.push(product)
            }
           
        });
        localStorage.setItem("cart", JSON.stringify(cartObject))
    }

}