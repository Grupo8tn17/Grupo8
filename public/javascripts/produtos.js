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

    
