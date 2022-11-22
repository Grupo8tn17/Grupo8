const form = document.getElementById('form');

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

   
    const email = document.getElementById('email')
    const pwd = document.getElementById('pwd')
    let hasError = false;
        
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)){
        hasError = true;
        createError(email, 'Preencha o campo email corretamente')
    } 

    if(pwd.value == ''){
        hasError = true;
        createError(pwd, 'Insira sua Senha');
    }

    if(!hasError) {
        this.submit();
    }
    
})

function mostrarOcultarSenha(){
    let pwd = document.getElementById('pwd');
    if(pwd.type == 'password') {
        pwd.type = 'text';
    } else {
        pwd.type = 'password';
    }
}