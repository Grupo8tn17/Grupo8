const btnAddCart = document.querySelector(".add-cart");
const idProduct = document.querySelector(".code-product");
var quantity = document.querySelector(".quantity-products");
var quantityValue = parseInt(quantity.innerText);

var cart = [];


btnAddCart.onclick = function (){
    let product = {
        id: idProduct.innerText,
        quantity: quantityValue,
    } 
    
    if (!localStorage.getItem("cart")){
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
    } else {
        let cartObject = JSON.parse(localStorage.getItem("cart"))
        console.log(cartObject)
        cartObject.forEach(produto => {
            
            if(produto.id == product.id){
                let quantityProduct = Number(produto.quantity)
                let soma = quantityProduct + product.quantity
                
                produto.quantity = soma
                
            } else {
                cartObject.push(product)
            }
            
            localStorage.setItem("cart", JSON.stringify(cartObject))
        });
        
    }

}