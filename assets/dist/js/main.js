var HamburguerMenu = document.querySelector('#hamburguer-menu');
var MenuItems = document.querySelector('#toggle-menu');

HamburguerMenu.addEventListener('click', function(e) {
  MenuItems.classList.toggle('show');
  e.stopPropagation();
});



