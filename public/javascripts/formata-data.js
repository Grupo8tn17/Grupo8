let data = document.querySelectorAll("#data-pedido");

console.log('cheguei', data);

for (let i = 0; i < data.length; i++) {
  const dataAtual = data[i].innerText;
  var dia  = dataAtual.split("-")[2];
  var mes  = dataAtual.split("-")[1];
  var ano  = dataAtual.split("-")[0];   
       
let dataFormatada = ("0"+ dia).slice(-2) + '/' + ("0"+ mes).slice(-2) + '/' + ano;
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
   data[i].innerText = dataFormatada; 
}


    

console.log('cheguei');



