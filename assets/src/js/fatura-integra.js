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
const InvoiceItem = InvoiceList.querySelectorAll('.invoice-item');
const InvoiceHide = InvoiceView.querySelector('#view-hide');


for (i = 0; i < InvoiceItem.length; i++){
    InvoiceItem[i].addEventListener("click", function(){
        InvoiceHide.style.cssText = "display: none";
        InvoiceView.classList.add('grayscreen');
    });
}


// Verifica se tem Tags

/* <div id="add-tag" class="add-tag">tag</div>
<input type="text" class="input-tag" id="input-tag">
<span class="plus" id="plus-tag">+</span>
<ul class="tag-list" id="tag-list"> */

/* <span class="item-tags" id="item-tags">
</span> */

var VerificaLista = this.querySelector('.item-tags').innerHTML;
var TagList = document.querySelector('#tag-list').innerHTML;


for (i = 0; i < InvoiceItem.length; i++){
    InvoiceItem[i].addEventListener("click", function(){

        if(TagList.length <= 0){
            console.log('Ta vazia');
        }
        else{
            console.log('tem tag já');
            console.log(TagList);
            TagList.innerHTML = " ";
            console.log(TagList);
        }


        // console.log(VerificaLista);
        //console.log(TagList);

        // if(!MyItems.hasChildNodes()){
        //     ListTags.innerHTML = " ";
        //     TagListRender = Array();
        // }

    });
}



// Renderiza os Icones
for (i = 0; i < InvoiceItem.length; i++){
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

// Fatura fechar compra

const InvoiceItemBtn = document.querySelector('#btn-details-return');

InvoiceItemBtn.addEventListener("click", function(){
    InvoiceHide.style.cssText = "display: flex";
    InvoiceView.classList.remove('grayscreen');

    const ItemTags = myItem;
    ItemTags.innerHTML = " ";
    var li = document.createElement('li');
    ItemTags.appendChild(li);
    li.classList.add('tag');
    for (i = 0; i < TagListRender.length; i++){
        li.textContent += ` #${TagListRender[i]}`;
    }
});




// Fatura Tags de compra

const AddTag = document.querySelector('#add-tag');
const InputTag = document.querySelector('#input-tag');
const InputPlus = document.querySelector('#plus-tag');
const TagList = document.querySelector('#tag-list');

var TagListRender = [];

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
        li.setAttribute("id","tag-item");
        li.textContent = InputTag.value;
        tagname = InputTag.value;
        InputTag.value = "";
        InputTag.focus();
        TagListRender.push(tagname);
    }
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