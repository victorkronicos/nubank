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