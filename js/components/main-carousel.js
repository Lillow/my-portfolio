// Move carousel
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

// Carousel text
let text = document.querySelector(".main-text");
const generation = document.querySelector(".box.-generation");

generation.addEventListener("mouseover", function () {
  text.innerHTML =
    "Em 2021 participei do bootcamp <span class= 'emphasis -generation'>Desenvolvedor Web Java Junior</span> na instituição <span class= 'emphasis -generation'>Generation Brasil</span> e lá aprendi práticas sobre: Metodologia Ágil - <span class= 'emphasis -generation'>SCRUM</span>, Lógica de Programação e Paradigma de Programação Orientada a Objetos em <span class= 'emphasis -generation'>Java</span>, versionamento (<span class= 'emphasis -generation'>Git</span>/<span class= 'emphasis -generation'>GitHub</span>), Banco de dados com <span class= 'emphasis -generation'>Mysql</span>, API Rest com <span class= 'emphasis -generation'>Spring Boot</span>, fundamentos web (<span class= 'emphasis -generation'>HTML5</span>, <span class= 'emphasis -generation'>CSS3</span>, <span class= 'emphasis -generation'>JavaScript</span> e <span class= 'emphasis -generation'>Bootstrap</span>), Experiência do Usuário - <span class= 'emphasis -generation'>UX</span>, componentização em <span class= 'emphasis -generation'>Angular</span>. Também aperfeiçoei e aprendi algumas habilidades e mentalidades como: Orientação ao Futuro, Responsabilidade Pessoal, Mentalidade de Crescimento, Persistência, Trabalho em Equipe, Atenção aos Detalhes, Proatividade e Comunicação. Lá pude descobrir o quão fascinante e estimulante é o mundo da <span class= 'emphasis -generation'>Programação</span>.";
});

let quitBox = document.getElementsByClassName("quitBox");

for (i = 0; i < quitBox.length; i++) {
  quitBox[i].addEventListener("mouseout", function changeDefaultText() {
    text.innerHTML =
      "<span class='emphasis'>Gamer</span>, <span class='emphasis'>geek</span> e <span class='emphasis'>filósofo</span> nas horas vagas, entusiasta de <span class='emphasis'>ciência</span> e <span class='emphasis'>tecnologia</span>, apaixonado por desenvolvimento de <span class='emphasis'>software</span>, alguém que questiona quando necessário e que não tem medo de errar. Atualmente <span class='emphasis'>FullStack Developer Júnior</span> e estudante de <span class='emphasis'>Análise e Desenvolvimento de Sistemas</span>, <span class='emphasis'>Danillo</span> já trabalhou como auxiliar ADM e prestou serviços em eventos, anda trilhando seu caminho a procura de coisas novas e desafios, <span class='emphasis'>Danillo</span> também adora fazer amigos e quando não está <span class='emphasis'>codando</span> ou em busca de novos projetos, está jogando ou trocando ideia com amigos. <br /><br /><span class='emphasis'>*passe o cursor nas caixas para ver mais informações*</span>";
  });
}
