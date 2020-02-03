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




// Utilizando jQuery para fazer o Slider

  $('.main-cards').slick({
    dots: true,
    infinite: false,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
  });


  // Utlizando jQuery para fazer o Bottom Slider

  $('#slick-bottom').slick({
    slide: 'li',
    dots: false,
    autoplay: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  });