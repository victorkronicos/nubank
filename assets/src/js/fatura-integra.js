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
<<<<<<< HEAD

// Busca Tags

=======

// Busca Tags

>>>>>>> b2bce5762da11744a44fdad599627312424c0099
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
<<<<<<< HEAD

const InvoiceItemBtn = document.querySelector('#btn-details-return'); // Seleciona o elemento com ID para fechar compra

InvoiceItemBtn.addEventListener("click", function(){  // Adiciona um evento de escutar o clique no botão
    InvoiceHide.style.cssText = "display: flex";
    InvoiceView.classList.remove('grayscreen');


    InputTag.style.cssText = "display: none;";
    InputPlus.style.cssText = "display: none;";
    TagList.innerHTML = "";
});

// Fatura mudar a view

const ViewControl = document.querySelector('#invoice-view');
let isDown = false;
let startX;
let scrollLeft;

ViewControl.addEventListener('mousedown', (e) => {
    isDown = true;
    ViewControl.classList.add('invoice-active');
    startX = e.pageX - ViewControl.offsetLeft;
    scrollLeft = ViewControl.scrollLeft;
});
ViewControl.addEventListener('mouseleave', () => {
    isDown = false;
    ViewControl.classList.remove('invoice-active');
});
ViewControl.addEventListener('mouseup', () => {
    isDown = false;
    ViewControl.classList.remove('invoice-active');
});
ViewControl.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - ViewControl.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    ViewControl.scrollLeft = scrollLeft - walk;
});

=======

const InvoiceItemBtn = document.querySelector('#btn-details-return'); // Seleciona o elemento com ID para fechar compra

InvoiceItemBtn.addEventListener("click", function(){  // Adiciona um evento de escutar o clique no botão
    InvoiceHide.style.cssText = "display: flex";
    InvoiceView.classList.remove('grayscreen');


    InputTag.style.cssText = "display: none;";
    InputPlus.style.cssText = "display: none;";
    TagList.innerHTML = "";
});

// Fatura mudar a view
var BarView = document.querySelector('#bar-view');
var view1 = InvoiceHide.querySelector('.view-1');
var view2 = InvoiceHide.querySelector('.view-2');

BarView.addEventListener("click", function(){
    view1.classList.toggle('close-view');
    view2.classList.toggle('mid-view');
});
>>>>>>> b2bce5762da11744a44fdad599627312424c0099
