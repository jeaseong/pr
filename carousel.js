const carouselSlide = document.querySelector(".carousel-slides");
const carouselArticle = document.querySelectorAll(".carousel-content");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 1;
const size = carouselArticle[0].clientWidth;
console.log(size);
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter >= carouselArticle.length - 1) return;
  carouselSlide.style.transition = `transform .4s ease-in-out`;
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = `transform .4s ease-in-out`;
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselArticle[counter].id === "last_clone") {
    carouselSlide.style.transition = "none";
    counter = carouselArticle.length - 2;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
  if (carouselArticle[counter].id === "first_clone") {
    carouselSlide.style.transition = "none";
    counter = carouselArticle.length - counter;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
});
