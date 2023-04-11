const quantidadeProduto = document.querySelectorAll('.quantidade-produtos');
const buttonMenuCabecalho = document.querySelectorAll('.menu-mobile');
const menuNavbar = document.querySelector('.navbar-mobile');
const fade = document.querySelector('#fade');
const hide = document.querySelector('#hide');
let showNavbar = false;

window.addEventListener('load', (e) => {
    let objectCart = JSON.parse(localStorage.getItem("cart")) || [];

    
    if(objectCart.length >= 1 ) {
        console.log(objectCart.length);
        quantidadeProduto.forEach(quantidade => {
            quantidade.style.display = 'block';
            quantidade.innerHTML = objectCart.length;
        })
        
    }
});

function toggleMenu () {
    fade.classList.toggle("hide");
    menuNavbar.classList.toggle('hide');
}

buttonMenuCabecalho.forEach(button => {
button.addEventListener('click', (e) => {
    e.preventDefault();
    if(!showNavbar) {
        menuNavbar.style.left = '0'
        showNavbar = true
        toggleMenu();
    } else {
        menuNavbar.style.left = '-100%'
        showNavbar = false;
        toggleMenu();
    }
    
});
});

fade.addEventListener('click', (e) => {
    if(showNavbar) {
        menuNavbar.style.left = '-100%'
        showNavbar = false;
        toggleMenu();
    }
    
})
