// Move carousel
/************************************************************************
const btnRight = document.querySelector(".main-button.-arrow.-right");
const btnLeft = document.querySelector(".main-button.-arrow.-left");
const elements = document.querySelector(
  ".main-wrapper.-grey.-second .elements"
);
let count = 0;

btnRight.addEventListener("click", () => {
  count -= 100;
  elements.style = `transform: translateX(${count}px)`;
});

btnLeft.addEventListener("click", () => {
  count += 100;
  elements.style = `transform: translateX(${count}px)`;
});
************************************************************************/

// Carousel text
let text1 = document.querySelector(".main-text");
const generation = document.querySelector(".box.-generation");
const estacio = document.querySelector(".box.-estacio");
const procenge = document.querySelector(".box.-procenge");

generation.addEventListener("mouseover", function changeText() {
  text1.innerHTML =
    "Em 2021 participou do bootcamp <span class= 'emphasis -orange'>Desenvolvedor Web Java Junior</span> na instituição <span class= 'emphasis -orange'>Generation Brasil</span> e lá aprendeu práticas sobre: Metodologia Ágil - <span class= 'emphasis -orange'>SCRUM</span>, Lógica de Programação e Paradigma de Programação Orientada a Objetos em <span class= 'emphasis -orange'>Java</span>, versionamento (<span class= 'emphasis -orange'>Git</span>/<span class= 'emphasis -orange'>GitHub</span>), Banco de dados com <span class= 'emphasis -orange'>Mysql</span>, API Rest com <span class= 'emphasis -orange'>Spring Boot</span>, fundamentos web (<span class= 'emphasis -orange'>HTML5</span>, <span class= 'emphasis -orange'>CSS3</span>, <span class= 'emphasis -orange'>JavaScript</span> e <span class= 'emphasis -orange'>Bootstrap</span>), Experiência do Usuário - <span class= 'emphasis -orange'>UX</span>, componentização em <span class= 'emphasis -orange'>Angular</span>. Também aperfeiçoou e aprendeu algumas habilidades e mentalidades como: Orientação ao Futuro, Responsabilidade Pessoal, Mentalidade de Crescimento, Persistência, Trabalho em Equipe, Atenção aos Detalhes, Proatividade e Comunicação. Lá pôde descobrir o quão fascinante e estimulante é o mundo da <span class= 'emphasis -orange'>Programação</span>.";
});

estacio.addEventListener("mouseover", function changeText() {
  text1.innerHTML =
    "<span class= 'emphasis -blue -second'>*ATUALMENTE*</span></br>Em 2022 iniciou os estudos em <span class= 'emphasis -blue'>Análise e Desenvolvimento de Sistemas</span> na faculdade <span class= 'emphasis -blue'>Estácio Do Recife</span>-PE.</br></br></br></br></br></br>";
});

procenge.addEventListener("mouseover", function changeText() {
  text1.innerHTML =
    "<span class= 'emphasis -yellow1 -second'>*ATUALMENTE*</span></br>Em 2023 iniciou como <span class= 'emphasis -yellow1'>Estagiário</span> na <span class= 'emphasis -yellow1'>PROCENGE</span>-PE.</br></br></br></br></br></br>";
});

let quitBox = document.getElementsByClassName("quitBox");

for (i = 0; i < quitBox.length; i++) {
  quitBox[i].addEventListener("mouseout", function changeDefaultText() {
    text1.innerHTML =
      "<span class='emphasis'>Gamer</span>, <span class='emphasis'>geek</span> e <span class='emphasis'>filósofo</span> nas horas vagas, entusiasta de <span class='emphasis'>ciência</span> e <span class='emphasis'>tecnologia</span>, apaixonado por desenvolvimento de <span class='emphasis'>software</span>, alguém que questiona quando necessário e que não tem medo de errar. Atualmente <span class='emphasis'>FullStack Developer Júnior</span> e estudante de <span class='emphasis'>Análise e Desenvolvimento de Sistemas</span>, <span class='emphasis'>Danillo</span> já trabalhou como auxiliar ADM e prestou serviços em eventos, anda trilhando seu caminho a procura de coisas novas e desafios, <span class='emphasis'>Danillo</span> também adora fazer amigos e quando não está <span class='emphasis'>codando</span> ou em busca de novos projetos, está jogando ou trocando ideia com amigos. <br /><br /><span class='emphasis -second'>*passe o cursor nas caixas para ver mais informações*</span>";
  });
}
