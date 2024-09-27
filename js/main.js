const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel .item");

const itemCount = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

const resetAutoPlay = () => {
  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    nextBtn.click();
  }, 5000);
};

nextBtn.onclick = () => {
  carousel.classList.remove("prev");
  carousel.classList.add("next");
  active = active + 1 >= itemCount ? 0 : active + 1;
  other_1 = active - 1 < 0 ? itemCount - 1 : active - 1;
  other_2 = active + 1 >= itemCount ? 0 : active + 1;
  changeSlider();
};

prevBtn.onclick = () => {
  carousel.classList.remove("next");
  carousel.classList.add("prev");
  active = active - 1 < 0 ? itemCount - 1 : active - 1;
  other_1 = active + 1 >= itemCount ? 0 : active + 1;
  other_2 = other_1 + 1 >= itemCount ? 0 : other_1 + 1;
  changeSlider();
};

const changeSlider = () => {
  document.querySelector(".carousel .item.active")?.classList.remove("active");
  document
    .querySelector(".carousel .item.other_1")
    ?.classList.remove("other_1");
  document
    .querySelector(".carousel .item.other_2")
    ?.classList.remove("other_2");

  items.forEach((e) => {
    e.classList.remove("animate");
    void e.offsetWidth;
    e.classList.add("animate");
  });

  items[active].classList.add("active");
  items[other_1].classList.add("other_1");
  items[other_2].classList.add("other_2");

  resetAutoPlay();
};
let autoPlay = setInterval(() => {
  nextBtn.click();
}, 5000);
