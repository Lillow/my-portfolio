const subtitle = document.querySelector(".main-subtitle > .text2");
const box = document.querySelector(".main-box.-grey");
let isAnimating = false;

async function typeWrite(element, text) {
  for (let i = 0; i < text.length; i++) {
    await new Promise(resolve => {
      setTimeout(() => {
        element.innerHTML += text[i];
        resolve();
      }, 75);
    });
  }
}

box.addEventListener("click", async () => {
  if (!isAnimating) {
    isAnimating = true;
    subtitle.innerHTML = "";
    await typeWrite(subtitle, "FullStack Developer");
    isAnimating = false;
  }
});