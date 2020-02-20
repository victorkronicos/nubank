//Para bloquear o cartão
const blockcardbtn = document.querySelector("#blockcard-btn");
const blockcard = document.querySelector("#blockcard");

blockcardbtn.addEventListener("click", function () {
    blockcard.classList.add('blockcard');
});

blockcard.addEventListener("click", function () {
    blockcard.classList.remove('blockcard');
});
// Slider Rodapé

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

InvoiceSearch.addEventListener("click", function () {
    InvoiceInput.style.cssText = "display: inline";
    InvoiceInput.focus();
});

// Fatura Expandir compra
const InvoiceList = document.querySelector('#invoice-list');
const InvoiceItem = InvoiceList.querySelectorAll('.invoice-item');
const InvoiceHide = InvoiceView.querySelector('#view-hide');
var InvoiceTagsExpanded;
var ActualTag;

for (i = 0; i < InvoiceItem.length; i++){  // Este Loop serve para adicionar a classe e "abrir" a opção do menu
    InvoiceItem[i].addEventListener("click", function(){
        InvoiceHide.style.cssText = "display: none";
        InvoiceView.classList.add('grayscreen');
    });
}

for (i = 0; i < InvoiceItem.length; i++){  // Este Loop serve para renderizar os icones na integra da fatura
    InvoiceItem[i].addEventListener("click", function(){        
        var icon = this.querySelector('.icon').src;
        var desc = this.querySelector('.item-desc').textContent;
        var value =  this.querySelector('.item-value').textContent;
        var date = this.querySelector('.item-date').textContent;
        icon = icon.replace('/gray/', '/white/')

        const InvoiceItemDesc = document.querySelector('.invoice-item-details');

        InvoiceItemDesc.querySelector('.btn-card').src = icon;
        InvoiceItemDesc.querySelector('.item-name').textContent = desc;
        InvoiceItemDesc.querySelector('.item-value').textContent = value;
        InvoiceItemDesc.querySelector('.item-data').textContent = date;
    });
}

for (i = 0; i < InvoiceItem.length; i++){
    InvoiceItem[i].addEventListener("click", function(){        
        InvoiceTagsExpanded = this;
        ActualTag = InvoiceTagsExpanded.querySelector('.item-tags');
        var MyTags = ActualTag.querySelectorAll('.tag');

        if (ActualTag.hasChildNodes()){ // Se a tag atual tem filhos
            var TagListInclude = document.querySelector('#tag-list');
            for (j = 0; j < MyTags.length; j++){
                var li = document.createElement('span');
                TagListInclude.appendChild(li);
                li.classList.add('tag');
                li.textContent = MyTags[j].textContent;
            }
            
            TagRemove = TagListInclude.querySelectorAll('.tag');

            for (i = 0; i < TagRemove.length; i++){
                TagRemove[i].addEventListener("click", function(){   // Adiciona evento de escutar click para remover tag
                    var nametag = this.textContent;
                    this.remove(TagRemove[i]);                          // Remove o próprio elemento que recebeu o duplo clique (INTEGRA)
                    
                    
                    SearchEqualTagNames = document.querySelectorAll('.tag');
                    
                    for (j = 0; j < SearchEqualTagNames.length; j++){ 
                        if (nametag == SearchEqualTagNames[j].textContent){
                            SearchEqualTagNames[j].remove();
                        }
                    }
                });
            }
        }
    });
}

// Busca Tags

InvoiceInput.addEventListener("input", function(){
    var input = this.value.toUpperCase();
    var ul = document.querySelector('#invoice-list');
    var li = ul.querySelectorAll('#invoice-item');
    var ListarItems = Array();

    for (var i = 0; i < li.length; i++) {
        var name = li[i].querySelector(".invoice-content").children;

        for(var x = 0; x < name.length; x++){
            var valuetocompare = name[x].textContent.toUpperCase();

            if(valuetocompare.includes(input)){
                ListarItems.push(li[i]);
                break;
            }
        }
        li[i].style.display = "none";
    }
    
    for(var i = 0; i < ListarItems.length; i++){
        ListarItems[i].style.display = "";
    }
});

// Fatura Integra Tags de compra

const AddTag = document.querySelector('#add-tag');
const InputTag = document.querySelector('#input-tag');
const InputPlus = document.querySelector('#plus-tag');
const TagList = document.querySelector('#tag-list');

AddTag.addEventListener("click", function(){ // Abre o input para adicionar TAGS
    InputTag.style.cssText = "display: block;";
    InputPlus.style.cssText = "display: block;";
    InputTag.focus();
});

InputPlus.addEventListener("click", function(){ // Evento de Adicionar TAG
    if (InputTag.value == ""){
        alert('Erro! A tag não pode ser vazia!');
        InputTag.focus();
    }
    else{
        var li = document.createElement('span');
        var litag = document.createElement('span');

        ActualTag.appendChild(li);
        TagList.appendChild(litag);

        litag.classList.add('tag');
        litag.textContent = InputTag.value;
        
        li.classList.add('tag');
        li.textContent = InputTag.value;
        tagname = ActualTag.value;
        InputTag.value = "";
        InputTag.focus();
    }

    if(TagList.hasChildNodes())  // Se tiver filhos, entra aqui
    {
        TagRemove = TagList.querySelectorAll('.tag');

        for (i = 0; i < TagRemove.length; i++){
            TagRemove[i].addEventListener("click", function(){   // Adiciona evento de escutar duplo click para remover tag
                var nametag = this.textContent;
                this.remove(TagRemove[i]);                          // Remove o próprio elemento que recebeu o duplo clique (INTEGRA)
                
                SearchEqualTagNames = document.querySelectorAll('.tag');
                
                for (j = 0; j < SearchEqualTagNames.length; j++){ 
                    if (nametag == SearchEqualTagNames[j].textContent){
                        SearchEqualTagNames[j].remove();
                    }
                }
            });
        }
    }
});

// Fatura fechar compra

const InvoiceItemBtn = document.querySelector('#btn-details-return'); // Seleciona o elemento com ID para fechar compra

InvoiceItemBtn.addEventListener("click", function(){  // Adiciona um evento de escutar o clique no botão
    InvoiceHide.style.cssText = "display: flex";
    InvoiceView.classList.remove('grayscreen');


    InputTag.style.cssText = "display: none;";
    InputPlus.style.cssText = "display: none;";
    TagList.innerHTML = "";
});






// Para sair do Aplicativo
const SairBtn = document.querySelector("#sair");
const Exit = document.querySelector("#exit");
const Refresh = document.querySelector('#refresh');

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

setTimeout(function(){
    Refresh.style.display = "block";
}, 8000);

});



Refresh.addEventListener("click", function(){
    location.reload();
},false);
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
// Rewards Expandido

const RewardsBtn = document.querySelector('#rewards-btn');
const RewardsView = document.querySelector('#rewards-view');
const RewardsReturn = document.querySelector('#rewards-return');

RewardsBtn.addEventListener("click", function () {
    RewardsView.classList.add('whitescreen');
});

RewardsReturn.addEventListener("click", function () {
    RewardsView.classList.remove('whitescreen');
});
// Saldo Opção de busca

const BalanceHeader = document.querySelector("#balance-header");
const ControlView = document.querySelector("#control-view");
var Doubt = BalanceHeader.querySelector("#doubt");
var Search = BalanceHeader.querySelector("#search");
const SearchInput = BalanceHeader.querySelector("#balance-search-input");

Search.addEventListener("click", function () {
    SearchInput.style.cssText = "display: inline";
    SearchInput.focus();
});

function PesquisarTransferencias() {
    var input, filter, ul, li, p, i, txtValue;
    input = document.getElementById('balance-search-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById('view-transfers');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p")[1];
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

BalanceControl.addEventListener("click", function () {

    if (Balance.classList.contains('balance-toggle')) {
        Balance.innerHTML = prevBalance;
    } else {
        Balance.textContent = " ";
    }


    Balance.classList.toggle('balance-toggle');
});


// Saldo Expandido

const BalanceBtn = document.querySelector('#balance-btn');
const BalanceView = document.querySelector('#balance-view');
const BalanceReturn = document.querySelector('#balance-return');

BalanceBtn.addEventListener("click", function () {
    BalanceView.classList.add('whitescreen');
});

BalanceReturn.addEventListener("click", function () {
    BalanceView.classList.remove('whitescreen');
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

// Barra Indicativa da Fatura

var app = document.querySelector(".container-app");

const right = window.getComputedStyle(app).marginRight;
  document.documentElement.style.setProperty('--right', `${right}`);




// Slider
var slider = tns({
    container: '.my-slider',
    controls: false,
    mouseDrag: true,
    loop: false,
    navPosition: 'bottom',
    ArrowKeys: true,
    center: true,
    items: 1,
  });
  
  
  // Slider Fatura
  var slider = tns({
    container: '.invoice-slider',
    controls: false,
    mouseDrag: true,
    loop: false,
    navPosition: 'bottom',
    ArrowKeys: true,
    center: true,
    items: 1,
  });