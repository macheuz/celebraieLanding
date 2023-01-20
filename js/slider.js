var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlide, 2000);
}

showSlide();
