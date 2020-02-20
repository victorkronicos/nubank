const HamburguerMenu = document.querySelector('#hamburguer-menu');
const MenuItems = document.querySelector('#toggle-menu');
const MainCards = document.querySelector('#main-cards');
const BottomCards = document.querySelector('#bottom-menu');
const Arrow = document.querySelector('#arrow');

// Função para esconder o Menu Principal
function CardPrincipal (){
  MainCards.classList.toggle('hide');
};

function CardsBottom (){
  BottomCards.classList.toggle('hide');
}


HamburguerMenu.addEventListener('click', function(e) {
  MenuItems.classList.toggle('show');
  if(MenuItems.classList.contains('show')) {
    Arrow.style.transform = 'rotate(180deg)';
  } else {
    Arrow.style.transform = 'rotate(0deg)';
  }
  CardPrincipal();
  CardsBottom();
  e.stopPropagation();
});

// Função para pegar corrigir altura no Mobile

// Altura da viewport multiplicada por 1% para obter um valor para vh
let vh = window.innerHeight * 0.01;

// Configura o valor em --vh na raiz do documento
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Barra Indicativa da Fatura

var app = document.querySelector(".container-app");

const right = window.getComputedStyle(app).marginRight;
  document.documentElement.style.setProperty('--right', `${right}`);



