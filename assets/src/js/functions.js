// Para sair do Aplicativo
const SairBtn = document.querySelector("#sair");
const Exit = document.querySelector("#exit");

SairBtn.addEventListener("click", function () {
    Exit.classList.add('sair');

    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    
      });
    }
    const titulo = document.querySelector('.creditos');
    typeWrite(titulo);
});




