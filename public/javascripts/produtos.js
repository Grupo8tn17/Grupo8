const header = document.getElementById('header');
const main = document.getElementsByTagName('main');
const navList = document.querySelector(' .nav-bar .nav-list');
const buttonMenu = document.getElementById('button-menu');
const buttonClosed = document.getElementById('button-closed');
const buttonFilterCategoria = document.querySelector('.categorias i');
const buttonFilterMarcas = document.querySelector('.marcas i');
const menuFilterCategorias = document.querySelector('.item-ul-categorias');
const menuFilterMarcas = document.querySelector('.item-ul-marcas');
const buttonClosedFilter = document.getElementById('button-closed-filter');
var showSidebar = false;



/*buttonMenu.addEventListener('click', function (){     
    if(!showSidebar) {
        navList.style.marginLeft = 0;
        navList.style.animationName = 'showSidebar'
    } else {
        navList.style.marginLeft = -100;
    }
})

buttonClosed.addEventListener('click', function() {

    if(!showSidebar) {
        navList.setAttribute('style', 'margin-left: -100%')
        navList.removeAttribute('style', 'margin-left')
    } else {
        navList.setAttribute('style', 'margin-left: 0%')
    }
})


buttonFilter.addEventListener('click', function (){
    if(!showSidebar) {
        menuFilter.style.marginLeft = 0;
        menuFilter.style.animationName = 'showSidebar'
    } else {
        menuFilter.style.marginLeft = -100;
    }
})

buttonClosedFilter.addEventListener('click', function (){
    if(!showSidebar) {
        menuFilter.setAttribute('style', 'margin-left: -100%');
        menuFilter.removeAttribute('style', 'margin-left');
    } else {
        menuFilter.setAttribute('style', 'margin-left: 0%')
    }
})*/


buttonFilterCategoria.addEventListener('click', function (){
            if(!showSidebar) {
                menuFilterCategorias.style.display = 'block';
                showSidebar = true;
            } else {
                menuFilterCategorias.style.display = 'none';
                showSidebar = false;    
            }
        });

        buttonFilterMarcas.addEventListener('click', function (){
            if(!showSidebar) {
                menuFilterMarcas.style.display = 'block';
                showSidebar = true;
            } else {
                menuFilterMarcas.style.display = 'none';
                showSidebar = false;    
            }
        })

    
