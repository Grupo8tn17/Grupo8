const header = document.getElementById('header');
const main = document.getElementsByTagName('main');
const navList = document.querySelector(' .nav-bar .nav-list');
const buttonMenu = document.getElementById('button-menu');
const buttonClosed = document.getElementById('button-closed');
const buttonFilter = document.getElementById('button-filter');
const menuFilter = document.getElementById('menu-filter');
const buttonClosedFilter = document.getElementById('button-closed-filter');
var showSidebar = false;



buttonMenu.addEventListener('click', function (){     
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
        navList.style.animationName = 'showSidebar'
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
})
