function sliderShort() {
    const slider = document.querySelector('#wrapperBoxes');
    let isScroll = false,
        left,
        posInitial,
        posX,
        scroll;
    slider.addEventListener('mousedown', (e) => {
      isScroll = true;
      posInitial = e.pageX - slider.offsetLeft;
      left = slider.scrollLeft;
    });
    slider.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if(isScroll) {
        posX = e.pageX - slider.offsetLeft;
        scroll = posX - posInitial;
        slider.scrollLeft = left - scroll;
      }
    });
    slider.addEventListener('mouseup', (e) => {
      isScroll = false;
    });
  }
  window.onload = sliderShort;
// Para sair do Aplicativo
const sair = document.querySelector("#sair");
const screen = document.querySelector("#mobile-screen");

sair.addEventListener("click", function(){
    screen.classList.add('logoff');
});

//Para bloquear o cartão
const blockcardbtn = document.querySelector("#blockcard-btn");
const blockcard = document.querySelector("#blockcard");

blockcardbtn.addEventListener("click", function (){
    blockcard.classList.add('blockcard');
});

blockcard.addEventListener("click", function(){
    blockcard.classList.remove('blockcard');
});

// Para Abrir a opção Organizar Icones
const orderbtn  = document.querySelector("#order-btn");
const orderoption  = document.querySelector("#orderbtns");
const orderclose  = document.querySelector("#order-close");


orderbtn.addEventListener("click", function (){
    orderoption.classList.add('blackscreen');
});

orderclose.addEventListener("click", function(){
    orderoption.classList.remove('blackscreen');
});

// Função de ordenação dos icones

window.addEventListener('load', function(){
    var list = document.querySelector('#wrapperBoxes')
    var items = list.querySelectorAll('.btn-item');
    var createlist = document.querySelector('#list-render');

    for (i = 0; i < items.length-1; i++){
        var name = items[i].querySelector('.name-item');
        var listname = name.textContent;

        var li = document.createElement('li');
        li.textContent = listname;

        createlist.appendChild(li);
        li.classList.add('list-item-order');
        li.innerHTML += '<i class="material-icons icon-order">reorder</i></li>';
    }
}, false);

// Fatura Expandido

const InvoiceBtn = document.querySelector('#invoice-btn');
const InvoiceView = document.querySelector('#invoice-view');
const InvoiceReturn = document.querySelector('#invoice-return');

InvoiceBtn.addEventListener("click", function (){
    InvoiceView.classList.add('whitescreen');
});

InvoiceReturn.addEventListener("click", function(){
    InvoiceView.classList.remove('whitescreen');
});

//Fatura opção de busca

const InvoiceSearch = document.querySelector('#invoice-search');
const InvoiceInput = document.querySelector('#invoice-search-input');

InvoiceSearch.addEventListener("click", function(){
        InvoiceInput.style.cssText = "display: inline";
        InvoiceInput.autofocus;
});

function Pesquisar() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('invoice-search-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById('invoice-list');
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      p = li[i].getElementsByTagName("p")[0];
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }



// Exibir / Esconder Saldo

const BalanceControl = document.querySelector('#balance-control');
const Balance = document.querySelector('#balance');
var prevBalance = Balance.innerHTML;

BalanceControl.addEventListener("click", function() {

    if (Balance.classList.contains('balance-toggle')){
        Balance.innerHTML = prevBalance;
    }else{
        Balance.textContent = " ";
    }


    Balance.classList.toggle('balance-toggle');
});


// Saldo Expandido

const BalanceBtn = document.querySelector('#balance-btn');
const BalanceView = document.querySelector('#balance-view');
const BalanceReturn = document.querySelector('#balance-return');

BalanceBtn.addEventListener("click", function(){
    BalanceView.classList.add('whitescreen');
});

BalanceReturn.addEventListener("click", function(){
    BalanceView.classList.remove('whitescreen');
});

// Rewards Expandido

const RewardsBtn = document.querySelector('#rewards-btn');
const RewardsView = document.querySelector('#rewards-view');
const RewardsReturn = document.querySelector('#rewards-return');

RewardsBtn.addEventListener("click", function(){
    RewardsView.classList.add('whitescreen');
});

RewardsReturn.addEventListener("click", function(){
    RewardsView.classList.remove('whitescreen');
});



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


// Slider
