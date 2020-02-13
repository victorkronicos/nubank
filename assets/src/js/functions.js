// Para sair do Aplicativo
const sair = document.querySelector("#sair");
const screen = document.querySelector("#mobile-screen");

sair.addEventListener("click", function () {
    screen.classList.add('logoff');
});

//Para bloquear o cartão
const blockcardbtn = document.querySelector("#blockcard-btn");
const blockcard = document.querySelector("#blockcard");

blockcardbtn.addEventListener("click", function () {
    blockcard.classList.add('blockcard');
});

blockcard.addEventListener("click", function () {
    blockcard.classList.remove('blockcard');
});

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

// Fatura Expandir compra
const InvoiceList = document.querySelector('#invoice-list');
const InvoiceItem = InvoiceList.querySelectorAll('#invoice-item');
const InvoiceHide = InvoiceView.querySelector('#view-hide');

for (i = 0; i < InvoiceItem.length; i++){
    InvoiceItem[i].addEventListener("click", function(){
        InvoiceHide.style.cssText = "display: none";
        InvoiceView.classList.add('grayscreen');

        // Exibir dinamicamente icones

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

// Fatura Tags de compra

const AddTag = document.querySelector('#add-tag');
const InputTag = document.querySelector('#input-tag');
const InputPlus = document.querySelector('#plus-tag');
const TagList = document.querySelector('#tag-list');

AddTag.addEventListener("click", function(){
    InputTag.style.cssText = "display: block;";
    InputPlus.style.cssText = "display: block;";
    InputTag.focus();
});

InputPlus.addEventListener("click", function(){
    if (InputTag.value == ""){
        alert('Erro! A tag não pode ser vazia!');
        InputTag.focus();
    }
    else{
        var li = document.createElement('li');
        TagList.appendChild(li);
        li.classList.add('tag');
        li.textContent = InputTag.value;
        tagname = InputTag.value;
        InputTag.value = "";
        InputTag.focus();
    }
});

// // Pega a lista já cadastrada, se não houver vira um array vazio
// var TagList = JSON.parse(localStorage.getItem('tag-list') || '[]');
// // Adiciona tag ao cadastro
// TagList.push({
//     tag: tagname,
// });
// // Salva a lista alterada
// localStorage.setItem("tag-list", JSON.stringify(TagList));
// console.log('Salva com sucesso.');
// console.log(TagList);


// Fatura fechar compra

const InvoiceItemBtn = document.querySelector('#btn-details-return');

InvoiceItemBtn.addEventListener("click", function(){
    InvoiceHide.style.cssText = "display: flex";
    InvoiceView.classList.remove('grayscreen');
});


//Fatura opção de busca

const InvoiceSearch = document.querySelector('#invoice-search');
const InvoiceInput = document.querySelector('#invoice-search-input');

InvoiceSearch.addEventListener("click", function () {
    InvoiceInput.style.cssText = "display: inline";
    InvoiceInput.focus();
});

function Pesquisar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('invoice-search-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById('invoice-list');
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

// Arrastar e Ordenar Menu Rodapé

var ListRender = document.querySelector('#list-render');
Sortable.create(ListRender, {
    animation: 300,
});

