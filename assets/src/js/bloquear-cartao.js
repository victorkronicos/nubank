//Para bloquear o cartão
const blockcardbtn = document.querySelector("#blockcard-btn");
const blockcard = document.querySelector("#blockcard");

blockcardbtn.addEventListener("click", function () {
    blockcard.classList.add('blockcard');
});

blockcard.addEventListener("click", function () {
    blockcard.classList.remove('blockcard');
});