const btnRight = document.querySelector(".main-button.-arrow.-right");
const btnLeft = document.querySelector(".main-button.-arrow.-left");
const elements = document.querySelector(".elements");
let count = 0;

btnRight.addEventListener("click", function () {
  count -= 100;
  elements.style = `transform: translateX(${count}px)`;
});

btnLeft.addEventListener("click", function () {
  count += 100;
  elements.style = `transform: translateX(${count}px)`;
});
