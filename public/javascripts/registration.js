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
