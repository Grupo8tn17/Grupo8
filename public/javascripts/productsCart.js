//buscando o produto no localStorage
var productsCart = localStorage.getItem("cart");

var objectCart = JSON.parse(productsCart);

//adiciona uma nova linha na tabela

//selecionando o elemento/tag onde o produto será adicionado no HTML
var cartProduct = document.querySelector(".cart-product");//tbody 



//adicionando o novo produto ao HTML

for (var i=0; i <= objectCart.length -1; i++) {
   
    cartProduct.innerHTML +=  
                        '<tr class="item-product">'+
                            '<td>'+objectCart[i].id+'</td>'+
                                '<td>'+
                                    '<div>'+
                                        '<img src="https://useorganico.vteximg.com.br/arquivos/ids/159313-1000-1000/Sabonete-Liquido-Natural-Suavetex-com-oleo-de-Coco-e-Extrato-de-Roma-237ml-%E2%80%93-Organico-Natural.jpg?v=636672865799200000">'+
                                        '<h4>Sabonete Liquido Natural</h4>'+
                                    '</div>'+
                                '</td>'+
                                '<td style="width: 8rem;"> R$ 50,00 </td>'+
                                '<td style="width: 12rem;"> '+
                                    '<div>'+
                                        '<button onclick="this.nextElementSibling.value++">+</button>'+
                                        '<span class="quantity">'+ objectCart[i].quantity +'</span>'+
                                        '<button onclick="this.previousElementSibling.value--">-</button>'+
                                    '</div>'+
                                '</td>'+
                                '<td> R$ 50,00 </td>'+                 
                                '<td style="width: 8rem;">'+
                                    '<button onclick="this.nextElementSibling.value++" id="buttonX"> X </button>'+
                                '</td>'+
                       '</tr>'
}

