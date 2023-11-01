const slides = document.querySelectorAll(".slider__item");

const points = document.querySelectorAll(".points__item");
points.forEach((point, i) => {
  point.addEventListener("click", () => setCurrentSlide(i));
});

const buttonPrev = document.querySelector(".prev");
buttonPrev.addEventListener("click", () => prevSlide());

const buttonNext = document.querySelector(".next");
buttonNext.addEventListener("click", () => nextSlide());

let isActive = false; //Признак работы анимации
let slideIndex = 0; //Индекс слайда
let newImg = slides[slideIndex]; //Выезжающий слайд
let currentImg = slides[slides.length - 1]; //Текущий слайд

const nextSlide = () => {
  if (!isActive) prepareShow((slideIndex += 1), "next");
};

const prevSlide = () => {
  if (!isActive) prepareShow((slideIndex -= 1), "prev");
};

const setCurrentSlide = (n) => {
  if (!isActive && n !== slideIndex) {
    let direction = n < slideIndex ? "prev" : "next";
    prepareShow((slideIndex = n), direction);
  }
};

const prepareShow = (n, direction) => {
  isActive = true;
  slideIndex =
    n > slides.length - 1 ? 0 : n < 0 ? slides.length - 1 : slideIndex;
  let newImg = slides[slideIndex];

  let offset = direction === "prev" ? -1200 : 1200;
  newImg.style.left = offset + "px";
  newImg.style.zIndex = 2;
  currentImg.style.zIndex = 1;
  let animation = setInterval(() => {
    offset += direction === "prev" ? 5 : -5;
    newImg.style.left = offset + "px";
    if (offset === 0) {
      currentImg.style.zIndex = 0;
      currentImg = newImg;
      clearInterval(animation);
      isActive = false;
    }
  }, 2);

  for (let i = 0; i <= points.length - 1; i++) {
    points[i].style.backgroundColor = i === slideIndex ? "black" : "gray";
  }
};

prepareShow(slideIndex, "next");
