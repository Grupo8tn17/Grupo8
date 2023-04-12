function alteraCEP () {
    const textCep = document.querySelectorAll('.text-cep');
    const textCEPPainel = document.querySelector('.text-cep-painel').innerHTML
    console.log(textCep);

    for(let i = 0; i < textCep.length; i++) {
        let cepFormatado = textCep[i].innerHTML
        console.log(cepFormatado);
        cepFormatado.split('-',5);

        textCep[i].innerHTML = "<strong>CEP: </strong> 0" + cepFormatado
    }
    
}

alteraCEP();