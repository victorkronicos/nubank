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

for (i = 0; i < InvoiceItem.length; i++){
    InvoiceItem[i].addEventListener("click", function(){
        InvoiceHide.style.cssText = "display: none";
        InvoiceView.classList.add('grayscreen');
    });
}

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

for (i = 0; i < InvoiceItem.length; i++){
    InvoiceItem[i].addEventListener("click", function(){        
        InvoiceTagsExpanded = this;
        ActualTag = InvoiceTagsExpanded.querySelector('.item-tags');
        MyTags = ActualTag.querySelectorAll('.tag');

        if (ActualTag.hasChildNodes()){
            var TagListInclude = document.querySelector('#tag-list');
            for (i = 0;MyTags.length; i++){
                var li = document.createElement('li');
                TagListInclude.appendChild(li);
                li.classList.add('tag'); 
                li.textContent = MyTags[i].textContent;
            }

        }
        else{
            console.log('não tem filhos');
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
        var litag = document.createElement('li');

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
});

// Fatura fechar compra

const InvoiceItemBtn = document.querySelector('#btn-details-return');

InvoiceItemBtn.addEventListener("click", function(){
    InvoiceHide.style.cssText = "display: flex";
    InvoiceView.classList.remove('grayscreen');


    InputTag.style.cssText = "display: none;";
    InputPlus.style.cssText = "display: none;";
    TagList.innerHTML = "";
});





