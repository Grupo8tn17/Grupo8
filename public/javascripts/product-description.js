const buttonAssessments = document.getElementById('rating');
const buttonInfoProduct = document.getElementById('info-product');
const ratings = document.querySelector('.container-rating');
const productsComposition = document.querySelector('.products-composition');
var showSidebar = false;
const buttomSmall = document.getElementById('button-small');
const buttonLarger = document.getElementById('button-larger');
var qtdProducts = document.getElementById('qtdProducts');
const productsBox = document.querySelector('.products-left')
const imgProduct = document.getElementById('img-product');


buttonAssessments.addEventListener('click', function () {
    if(!showSidebar) {
        productsComposition.setAttribute('style', 'display: none');
        ratings.setAttribute('style', 'display: block');
    } 
})

buttonInfoProduct.addEventListener('click', function () {
    if(!showSidebar) {
        productsComposition.setAttribute('style', 'display: block');
        ratings.setAttribute('style', 'display: none');
    }
})

buttomSmall.addEventListener('click', function () {
    let newQtdProducts = parseInt(qtdProducts.innerText);
    if(newQtdProducts != 0 && newQtdProducts > 1 ) {
        qtdProducts.innerText = newQtdProducts - 1;
    }
})

buttonLarger.addEventListener('click', function () {
    let contProducts = parseInt(qtdProducts.innerText);
    if(contProducts => 1) {
        qtdProducts.innerText = contProducts + 1;
    }
})

productsBox.addEventListener('mousemove', function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgProduct.style.transformOrigin = `${x}px ${y}px`;
    imgProduct.style.transform = 'scale(2)';
});

productsBox.addEventListener('mouseleave', function () {
    imgProduct.style.transformOrigin = 'center center';
    imgProduct.style.transform = 'scale(1)';
})

