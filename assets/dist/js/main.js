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
        console.log(listname);

        var li = document.createElement('li');
        li.textContent = listname;

        createlist.appendChild(li);
        li.classList.add('list-item-order');
        li.innerHTML += '<i class="material-icons icon-order">reorder</i></li>';
    }

    // Buscar elemento pai
    

    

}, false);

const HamburguerMenu = document.querySelector('#hamburguer-menu');
const MenuItems = document.querySelector('#toggle-menu');
const MainCards = document.querySelector('#main-cards');
const BottomCards = document.querySelector('#bottom-menu');

// Função para esconder o Menu Principal
function CardPrincipal (){
  MainCards.classList.toggle('hide');
};

function CardsBottom (){
  BottomCards.classList.toggle('hide');
}


HamburguerMenu.addEventListener('click', function(e) {
  MenuItems.classList.toggle('show');
  CardPrincipal();
  CardsBottom();
  e.stopPropagation();
});



