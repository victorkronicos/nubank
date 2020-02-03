

// Para sair do Aplicativo
const sair = document.querySelector("#sair");
const screen = document.querySelector("#mobile-screen");

sair.addEventListener("click", function(){
    screen.classList.add('logoff');
});
