<<<<<<<< HEAD:public/javascripts/panelAdmin-validation.js
/* const form = document.getElementById('form');
========
 const form = document.getElementById('form');
>>>>>>>> developer:public/javascripts/painelAdmin-validacao.js

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
    //Validar campos obrigatórios
    event.preventDefault();
    removeError();

    const inputList = document.querySelectorAll('.box-body input');
    let hasError = false;

    inputList.forEach(input => {
       if(!input.value) {
            hasError = true
            createError(input, 'Campo Obrigatório');
       } 
    });

    if(!hasError) {
        this.submit();
    }
<<<<<<<< HEAD:public/javascripts/panelAdmin-validation.js
}) */
========
}) 
>>>>>>>> developer:public/javascripts/painelAdmin-validacao.js
