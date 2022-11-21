const button = document.getElementById('advance')

button.addEventListener('click', (event) => {
    event.preventDefault()
   
    const fullName = document.getElementById('fullName')
    const email = document.getElementById('email')
    const cpf = document.getElementById('cpf')
    const tel = document.getElementById('tel')
    const cep = document.getElementById('cep')
    const pwd1 = document.getElementById('pwd1')
    const pwd2 = document.getElementById('pwd2')

    if(fullName.value == ''){
        fullName.classList.add('errorInput')
        alert('O campo nome não pode estar vazio') 
    }else {
        fullName.classList.remove('errorInput')
    }

    if(pwd1.value.length < 7){
        pwd1.classList.add('errorInput')
        alert('O campo senha não pode ter menos que 7 caracteres')
    }else {
        pwd1.classList.remove('errorInput')
    }

    if(pwd2.value == "" || pwd2.value !== pwd1.value){
        pwd2.classList.add('errorInput')
        alert('Confirmação de senha incorreta') 
    }else {
        pwd2.classList.remove('errorInput')
    }

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)){
        email.classList.add('errorInput')
        alert("Preencha o campo email corretamente")
    } else {
        email.classList.remove('errorInput')
    }

    if(cpf.value.length < 11 || cpf.value.length > 11){
        cpf.classList.add('errorInput')
        alert('O campo CPF tem que ter 11 caracteres')
    }else {
        cpf.classList.remove('errorInput')
    }

    if(tel.value.length < 13 || tel.value.length > 13){
        tel.classList.add('errorInput')
        alert('O campo Tel Celular tem que ter 13 caracteres')
    }else {
        tel.classList.remove('errorInput')
    }

    if(cep.value.length < 9 || cep.value.length > 9){
        cep.classList.add('errorInput')
        alert('O campo cep tem que ter 9 caracteres')
    }else {
        cep.classList.remove('errorInput')
    }
})