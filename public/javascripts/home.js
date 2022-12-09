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
