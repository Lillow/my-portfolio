const subtitle = document.querySelector(".main-subtitle > .text2");
const box = document.querySelector(".main-box.-grey");

function typeWrite(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = " ";
  textArray.forEach((letter, i) => {
    setTimeout(() => (element.innerHTML += letter), 75 * i);
  });
}

box.addEventListener("click", () => {
  subtitle.innerHTML = "FullStack Developer";
  typeWrite(subtitle);
});
