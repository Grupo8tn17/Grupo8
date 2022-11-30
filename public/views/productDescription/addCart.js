var btnAddCart = document.querySelector(".top");
var idProduct = document.querySelector(".primeira1 sub");
var quantity = document.querySelectorAll(".form-control")[1];
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