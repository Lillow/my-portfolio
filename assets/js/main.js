let show = true;
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, navLinks2) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.navLinks2 = document.querySelectorAll(navLinks2);
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = '')
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                      index / 7 + 0.3
                  }s`);
        });
    }

    handleClick() {
        document.body.style.overflow = show ? 'hidden' : 'initial';
        this.navList.classList.toggle('on', show);
        show = !show;
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
        this.navLinks2.forEach((item) => {
            item.addEventListener('click', this.handleClick);
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
    '.nav-list li a'
);
mobileNavbar.init();

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 100 * i);
    });
}
const titulo = document.querySelector('.typewriter');
typeWrite(titulo);

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000
});

sr.reveal('.delaySmallReveal', { delay: 200 });
sr.reveal('.delayMediumReveal', { delay: 300 });
sr.reveal('.delayLargeReveal', { delay: 400 });
sr.reveal('.delayExtraBigReveal', { delay: 600 });

sr.reveal('.intervalCardReveal', { interval: 400 });

var texto1 = document.querySelector('.mudarTextoDescricao');

document.querySelector('.html').addEventListener('mouseover', function () {
    texto1.innerHTML =
        'O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website.';
});

document.querySelector('.css').addEventListener('mouseover', function () {
    texto1.innerHTML =
        'CSS é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site.';
});

document.querySelector('.js').addEventListener('mouseover', function () {
    texto1.innerHTML =
        'JavaScript é uma linguagem de programação que permite a você criar conteúdo de interação que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante.';
});

document.querySelector('.ts').addEventListener('mouseover', function () {
    texto1.innerHTML =
        'TypeScript é um superset ou superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.';
});

document.querySelector('.angular').addEventListener('mouseover', function () {
    texto1.innerHTML =
        'Angular é uma plataforma e framework para construção da interface de aplicações usando HTML, CSS e, principalmente, JavaScript, criada pelos desenvolvedores da Google.';
});

document.querySelector('.react').addEventListener('mouseover', function () {
    texto1.innerHTML =
        'React é uma biblioteca JavaScript desenvolvida pelo Facebook de código aberto com foco em criar interfaces de usuário em páginas web.';
});

document.querySelector('.java').addEventListener('mouseover', function () {
    texto1.innerHTML =
        'Java é uma linguagem de programação e um ambiente computacional. A tecnologia pode ser implementada em praticamente qualquer lugar, desde sites, computadores, celulares, calculadoras, videogames e etc.';
});

document
    .querySelector('.spring')
    .addEventListener('mouseover', function mudarTexto8() {
        texto1.innerHTML =
            'O Spring Boot é um framework Java open source que tem como objetivo facilitar esse processo em aplicações Java. Consequentemente, ele traz mais agilidade para o processo de desenvolvimento.';
    });

var sairCaixa = document.getElementsByClassName('sairCaixa');

for (i = 0; i < sairCaixa.length; i++) {
    sairCaixa[i].addEventListener('mouseout', function mudarTextoNormal() {
        texto1.innerHTML = `*passe o cursor no card para ler*`;
    });
}

$('.carousel').carousel({
    pause: true,
    interval: false
});
