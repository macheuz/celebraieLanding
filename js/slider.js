var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlides() {
for (var i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex = (slideIndex + 1) % (slides.length / 3);
for (var i = 0; i < 3; i++) {
slides[slideIndex * 3 + i].style.display = "flex";
}
setTimeout(showSlides, 5000);
}

showSlides();