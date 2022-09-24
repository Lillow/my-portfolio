//Skills Text
const html = document.querySelector(".main-cards.-purple.-html");
const css = document.querySelector(".main-cards.-purple.-css");
const js = document.querySelector(".main-cards.-purple.-js");
const react = document.querySelector(".main-cards.-purple.-react");
const java = document.querySelector(".main-cards.-purple.-java");
let text2 = document.querySelector(".main-text.-second");

html.addEventListener("mouseover", function changeText() {
  text2.innerHTML =
    "<span class= 'emphasis -orange -second'>HTML</span> <br> É uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.";
});

css.addEventListener("mouseover", function changeText() {
  text2.innerHTML =
    "<span class= 'emphasis -blue -second'>CSS</span> <br> É uma linguagem para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web.";
});

js.addEventListener("mouseover", function changeText() {
  text2.innerHTML =
    "<span class= 'emphasis -yellow -second'>JavaScript</span> <br> é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).";
});

react.addEventListener("mouseover", function changeText() {
  text2.innerHTML =
    "<span class= 'emphasis -blue1 -second'>React</span> <br> É uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (front-end) em páginas web.";
});

java.addEventListener("mouseover", function changeText() {
  text2.innerHTML =
    '<span class= "emphasis -red -second">Java</span> <br> É uma linguagem de programação orientada a objetos e portável independente de plataforma, ou seja, "escreva uma vez, execute em qualquer lugar".';
});

let quitCard = document.getElementsByClassName("quitCard");

for (i = 0; i < quitCard.length; i++) {
  quitCard[i].addEventListener("mouseout", function changeDefaultText() {
    text2.innerHTML = "*passe o cursor no card para ler*";
  });
}
