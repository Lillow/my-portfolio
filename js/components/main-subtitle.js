const subtitle = document.querySelector(".main-subtitle > .text2");

function typeWrite(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = " ";
  textArray.forEach((letter, i) => {
    setTimeout(() => (element.innerHTML += letter), 75 * i);
  });
}

subtitle.addEventListener("click", () => {
  typeWrite(subtitle);
});
