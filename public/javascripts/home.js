let time = 5000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#banner img"),
  max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("firstBanner");

  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("firstBanner");
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}
window.addEventListener("load", start);

var valores = document.querySelectorAll('.price');
var valorAntigo = document.querySelectorAll('.price');
const valorPromo = document.querySelectorAll('#old-price');


window.addEventListener('load', function (e) {
  valores.forEach(valor => {
    valor.innerText = valor.innerText.replace(".", ",");
  })
        
  });