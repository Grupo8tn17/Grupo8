const button = document.getElementById('enter')

button.addEventListener('click', (event) => {
    event.preventDefault()
   
    const email = document.getElementById('email')
    const pwd = document.getElementById('pwd')
        
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)){
        email.classList.add('errorInput')
        alert("Preencha o campo email corretamente")
    } else {
        email.classList.remove('errorInput')
    }

    if(pwd.value == ''){
        pwd.classList.add('errorInput')
        alert('Insira sua senha')
    }else {
        pwd.classList.remove('errorInput')
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