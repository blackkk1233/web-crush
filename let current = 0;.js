let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 3000);