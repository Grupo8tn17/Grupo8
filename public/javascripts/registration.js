<<<<<<< HEAD
window.addEventListener("load", function () {

  const formCadastro = document.querySelector("main form.registrationForm");
  const formCadastroInput = document.querySelectorAll(
    "main form.registrationForm input"
  );
  let hasFormErrors = false;
  let hasErrors = false;
 
  const removeErrors = function(errorType){
    if(errorType === 'form'){
      hasFormErrors = false;
    } else {
      hasErrors = false;
    }

    const errorSpan = document.querySelectorAll('main form.registrationForm span.error');
    errorSpan.forEach(span => span.remove());
  };

  const createError = function(input, mensagem, errorType){
    if(errorType === 'form'){
      hasFormErrors = true;
    } else {
      hasErrors = true;
    }

    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error');
    errorSpan.innerText - mensagem;
    input.insertAdjacentElement('afterend', errorSpan);
  };

  formCadastro.addEventListener(sumit, function (event) {
    event.preventDefault();
    removeErrors('form');

    formCadastroInput.forEach(input => {
      if(!input.value){
        createError(input, 'Campo Obrigatório', 'form');
      }
    });

    if(!hasErrors && !hasFormErrors){
      this.sumit();
    }
    
    const validateLength = function (input, min, max) {
      const { value } = input;
      if (value.length >= min && value.length < max) {
        return;
      } else {
        createError(input, `O campo deve ter entre ${min} e ${max} caracteres`);
      }
    };

    const validateEmail = function (input) {
      const { value } = input;
      if (value.includes("@") && value.includes(".")) {
        return;
      } else {
        createError(input, "Email incorreto", 'input');
      }
    };

    formCadastroInput.forEach((input) => {
      input.addEventListener("change", function () {
        removeErrors(input);

        switch (input.name) {
          case "name":
            validateLength(input, 5, 50);
            break;

          case "email":
            validateLength(input, 10, 50);
            validateEmail(input);
            break;

          case "cpf":
            validateCpf();
            break;

          case "tel":
            validateTel();
            break;

          case "cep":
            validateCep();
            break;

          case "pwd1":
            validatePwd1();
            break;

          case "pwd2":
            validatePwd2();
            break;

          default:
            break;
        }
      });
    });
  });
});
=======
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
>>>>>>> dev-danieli
