// Para Abrir a opção Organizar Icones
const orderbtn = document.querySelector("#order-btn");
const orderoption = document.querySelector("#orderbtns");
const orderclose = document.querySelector("#order-close");


orderbtn.addEventListener("click", function () {
    orderoption.classList.add('blackscreen');
});

orderclose.addEventListener("click", function () {
    orderoption.classList.remove('blackscreen');
    var ListItemOrder = document.querySelector('#list-render');
    var ListItems = ListItemOrder.querySelectorAll('.list-item-order');

    var wrapperBoxes = document.querySelector('#wrapperBoxes');
    wrapperBoxes.innerHTML = " ";

    ListItems.forEach(function(value){

        var Text = value.textContent.replace('reorder', "").trim();
        var image = 0;

        switch(Text){
                case 'Indicar amigos': 
                    image = 'invite-home.png';
            break;
                case 'Recarga de celular': //2
                    image = 'phone.png';
            break;
                case 'Cobrar': //3
                    image = 'money-talk.png';
            break;
                case 'Empréstimos': //4
                    image = 'money-talk.png';
            break;
                case 'Depositar': //5
                    image = 'deposit.png';
            break;
                case 'Transferir': //6
                    image = 'transfer.png';
            break;
                case 'Me Ajuda': //6
                    image = 'help-me.png';
            break;
                case 'Pagar': //6
                    image = 'bar-code.png';
            break;
                case 'Bloquear cartão': //6
                    image = 'lock.png';
            break;
                case 'Cartão virtual': //6
                    image = 'virtual-card.png';
            break;
        }

        wrapperBoxes.innerHTML += `<div class="box">
                                        <button class="btn-item" `+((Text === 'Bloquear cartão')? 'id="blockcard-btn"' : '')+`>
                                            <img class="btn-icon" src="assets/dist/images/icons/white/`+image+`">
                                            <p class="name-item">`+Text+`</p>
                                        </button>
                                    </div>`
    });

    wrapperBoxes.innerHTML += `<div class="box">
                                    <button class="btn-item" id="order-btn">
                                        <img class="btn-icon" src="assets/dist/images/icons/white/filter.png">
                                        <p class="name-item">Ordenação atalhos</p>
                                    </button>
                                </div>`

    var orderbtns = document.querySelector('#order-btn');

    orderbtns.addEventListener("click", function(){
        orderoption.classList.add('blackscreen');
    });

    var blockcardbtn = document.querySelector("#blockcard-btn");
    var blockcard = document.querySelector("#blockcard");
    
    blockcardbtn.addEventListener("click", function () {
        blockcard.classList.add('blockcard');
    });
    
    blockcard.addEventListener("click", function () {
        blockcard.classList.remove('blockcard');
    });


});

// Função de ordenação dos icones

window.addEventListener('load', function () {
    var list = document.querySelector('#wrapperBoxes')
    var items = list.querySelectorAll('.btn-item');
    var createlist = document.querySelector('#list-render');

    for (i = 0; i < items.length - 1; i++) {
        var name = items[i].querySelector('.name-item');
        var listname = name.textContent;

        var li = document.createElement('li');
        li.textContent = listname;

        createlist.appendChild(li);
        li.classList.add('list-item-order');
        li.innerHTML += '<i class="material-icons icon-order">reorder</i></li>';
    }

}, false);

// Arrastar e Ordenar Menu Rodapé

var ListRender = document.querySelector('#list-render');
Sortable.create(ListRender, {
    animation: 300,
});