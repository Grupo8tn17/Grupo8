const button = document.getElementById('form');

const removeError = function () {
    const errorSpans = document.querySelectorAll('span.error');
    errorSpans.forEach(span => span.remove());
}

const createError = function (input, mensagem) {
    const errorSpan = document.createElement('span'); 
    errorSpan.classList.add('error');
    errorSpan.innerText = mensagem
    input.insertAdjacentElement('afterend', errorSpan);
}


form.addEventListener('submit', function(event) {
    event.preventDefault();
    removeError();
   
    const fullName = document.getElementById('fullName')
    const email = document.getElementById('email')
    const cpf = document.getElementById('cpf')
    const tel = document.getElementById('tel')
    const cep = document.getElementById('cep')
    const pwd1 = document.getElementById('pwd1')
    const pwd2 = document.getElementById('pwd2')
    hashError = false;

    if(fullName.value == ''){
        hashError = true;
        createError(fullName, 'O campo nome não pode estar vazio')
    }

    if(pwd1.value.length < 7){
        hashError = true;
        createError(pwd1, 'O campo senha não pode ter menos que 7 caracteres')
    }

    if(pwd2.value == "" || pwd2.value !== pwd1.value){
        hashError = true;
        createError(pwd2, 'Confirmação de senha incorreta')
    }

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)){
        hashError = true;
        createError(email, 'Preencha o campo email corretamente');
    }

    if(cpf.value.length < 11 || cpf.value.length > 11){
        hashError = true;
        createError(cpf, 'O campo CPF tem que ter 11 caracteres');
    }

    //if(tel.value.length < 13 || tel.value.length > 13){
     //   hashError = true;
       // createError(tel, 'O campo Tel Celular tem que ter 13 caracteres');
    //}

    //if(cep.value.length < 9 || cep.value.length > 9){
      //  hashError = true;
        //createError(cep, 'Digite o CEP');
    //}

    if(!hashError) {
        this.submit();
    }
})