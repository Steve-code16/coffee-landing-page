const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel .list");

const itemCount = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

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
  let oldActiveItem = document.querySelector(".carousel .item.active");
  if (oldActiveItem) oldActiveItem.classList.remove("active");

  let oldOther_1Item = document.querySelector(".carousel .item.other_1");
  if (oldOther_1Item) oldOther_1Item.classList.remove("other_1");

  let oldOther_2Item = document.querySelector(".carousel .item.other_2");
  if (oldOther_2Item) oldOther_2Item.classList.remove("other_2");

  items.forEach((e) => {
    e.querySelector(".image img").style.animation = "none";
    e.querySelector(".image figcaption").style.animation = "none";
    void e.offsetWidth;
    e.querySelector(".image img").style.animation = "";
    e.querySelector(".image figcaption").style.animation = "";
  });

  items[active].classList.add("active");
  items[other_1].classList.add("other_1");
  items[other_2].classList.add("other_2");
};
