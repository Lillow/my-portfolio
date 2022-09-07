const box = document.querySelector(".main-box.-grey");
const subtitle = document.querySelector(".main-subtitle > .text2");

function typeWrite(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = " ";
  textArray.forEach(function (letter, i) {
    setTimeout(function () {
      element.innerHTML += letter;
    }, 200 * i);
  });
}

typeWrite(subtitle);
