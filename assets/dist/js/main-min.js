function sliderShort(){const e=document.querySelector("#wrapperBoxes");let t,n,r,c,o=!1;e.addEventListener("mousedown",r=>{o=!0,n=r.pageX-e.offsetLeft,t=e.scrollLeft}),e.addEventListener("mousemove",a=>{a.preventDefault(),o&&(r=a.pageX-e.offsetLeft,c=r-n,e.scrollLeft=t-c)}),e.addEventListener("mouseup",e=>{o=!1})}window.onload=sliderShort;const sair=document.querySelector("#sair"),screen=document.querySelector("#mobile-screen");sair.addEventListener("click",function(){screen.classList.add("logoff")});const blockcardbtn=document.querySelector("#blockcard-btn"),blockcard=document.querySelector("#blockcard");blockcardbtn.addEventListener("click",function(){blockcard.classList.add("blockcard")}),blockcard.addEventListener("click",function(){blockcard.classList.remove("blockcard")});const orderbtn=document.querySelector("#order-btn"),orderoption=document.querySelector("#orderbtns"),orderclose=document.querySelector("#order-close");orderbtn.addEventListener("click",function(){orderoption.classList.add("blackscreen")}),orderclose.addEventListener("click",function(){orderoption.classList.remove("blackscreen");var e=document.querySelector("#list-render").querySelectorAll(".list-item-order"),t=document.querySelector("#wrapperBoxes");t.innerHTML=" ",e.forEach(function(e){var n=e.textContent.replace("reorder","").trim(),r=0;switch(n){case"Indicar amigos":r="invite-home.png";break;case"Recarga de celular":r="phone.png";break;case"Cobrar":case"Empréstimos":r="money-talk.png";break;case"Depositar":r="deposit.png";break;case"Transferir":r="transfer.png";break;case"Me Ajuda":r="help-me.png";break;case"Pagar":r="bar-code.png";break;case"Bloquear cartão":r="lock.png";break;case"Cartão virtual":r="virtual-card.png"}t.innerHTML+='<div class="box">\n                                        <button class="btn-item" '+("Bloquear cartão"===n?'id="blockcard-btn"':"")+'>\n                                            <img class="btn-icon" src="assets/dist/images/icons/white/'+r+'">\n                                            <p class="name-item">'+n+"</p>\n                                        </button>\n                                    </div>"}),t.innerHTML+='<div class="box">\n                                    <button class="btn-item" id="order-btn">\n                                        <img class="btn-icon" src="assets/dist/images/icons/white/filter.png">\n                                        <p class="name-item">Ordenação atalhos</p>\n                                    </button>\n                                </div>',document.querySelector("#order-btn").addEventListener("click",function(){orderoption.classList.add("blackscreen")});var n=document.querySelector("#blockcard-btn"),r=document.querySelector("#blockcard");n.addEventListener("click",function(){r.classList.add("blockcard")}),r.addEventListener("click",function(){r.classList.remove("blockcard")})}),window.addEventListener("load",function(){var e=document.querySelector("#wrapperBoxes").querySelectorAll(".btn-item"),t=document.querySelector("#list-render");for(i=0;i<e.length-1;i++){var n=e[i].querySelector(".name-item").textContent,r=document.createElement("li");r.textContent=n,t.appendChild(r),r.classList.add("list-item-order"),r.innerHTML+='<i class="material-icons icon-order">reorder</i></li>'}},!1);const InvoiceBtn=document.querySelector("#invoice-btn"),InvoiceView=document.querySelector("#invoice-view"),InvoiceReturn=document.querySelector("#invoice-return");InvoiceBtn.addEventListener("click",function(){InvoiceView.classList.add("whitescreen")}),InvoiceReturn.addEventListener("click",function(){InvoiceView.classList.remove("whitescreen")});const InvoiceList=document.querySelector("#invoice-list"),InvoiceItem=InvoiceList.querySelectorAll("#invoice-item"),InvoiceHide=InvoiceView.querySelector("#view-hide");for(i=0;i<InvoiceItem.length;i++)InvoiceItem[i].addEventListener("click",function(){InvoiceHide.style.cssText="display: none",InvoiceView.classList.add("grayscreen");var e=this.querySelector(".icon").src,t=this.querySelector(".item-desc").textContent,n=this.querySelector(".item-value").textContent,r=this.querySelector(".item-date").textContent;e=e.replace("/gray/","/white/");const c=document.querySelector(".invoice-item-details");c.querySelector(".btn-card").src=e,c.querySelector(".item-name").textContent=t,c.querySelector(".item-value").textContent=n,c.querySelector(".item-data").textContent=r});const AddTag=document.querySelector("#add-tag"),InputTag=document.querySelector("#input-tag"),InputPlus=document.querySelector("#plus-tag"),TagList=document.querySelector("#tag-list");AddTag.addEventListener("click",function(){InputTag.style.cssText="display: block;",InputPlus.style.cssText="display: block;",InputTag.focus()}),InputPlus.addEventListener("click",function(){if(""==InputTag.value)alert("Erro! A tag não pode ser vazia!"),InputTag.focus();else{var e=document.createElement("li");TagList.appendChild(e),e.classList.add("tag"),e.textContent=InputTag.value,tagname=InputTag.value,InputTag.value="",InputTag.focus()}});const InvoiceItemBtn=document.querySelector("#btn-details-return");InvoiceItemBtn.addEventListener("click",function(){InvoiceHide.style.cssText="display: flex",InvoiceView.classList.remove("grayscreen")});const InvoiceSearch=document.querySelector("#invoice-search"),InvoiceInput=document.querySelector("#invoice-search-input");function Pesquisar(){var e,t,n;for(e=document.getElementById("invoice-search-input").value.toUpperCase(),t=document.getElementById("invoice-list").getElementsByTagName("li"),n=0;n<t.length;n++)p=t[n].getElementsByTagName("p")[1],(p.textContent||p.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none"}InvoiceSearch.addEventListener("click",function(){InvoiceInput.style.cssText="display: inline",InvoiceInput.focus()});const BalanceHeader=document.querySelector("#balance-header"),ControlView=document.querySelector("#control-view");var Doubt=BalanceHeader.querySelector("#doubt"),Search=BalanceHeader.querySelector("#search");const SearchInput=BalanceHeader.querySelector("#balance-search-input");function PesquisarTransferencias(){var e,t,n,r;for(e=document.getElementById("balance-search-input").value.toUpperCase(),t=document.getElementById("view-transfers").getElementsByTagName("li"),r=0;r<t.length;r++)((n=t[r].getElementsByTagName("p")[1]).textContent||n.innerText).toUpperCase().indexOf(e)>-1?t[r].style.display="":t[r].style.display="none"}Search.addEventListener("click",function(){SearchInput.style.cssText="display: inline",SearchInput.focus()});const BalanceControl=document.querySelector("#balance-control"),Balance=document.querySelector("#balance");var prevBalance=Balance.innerHTML;BalanceControl.addEventListener("click",function(){Balance.classList.contains("balance-toggle")?Balance.innerHTML=prevBalance:Balance.textContent=" ",Balance.classList.toggle("balance-toggle")});const BalanceBtn=document.querySelector("#balance-btn"),BalanceView=document.querySelector("#balance-view"),BalanceReturn=document.querySelector("#balance-return");BalanceBtn.addEventListener("click",function(){BalanceView.classList.add("whitescreen")}),BalanceReturn.addEventListener("click",function(){BalanceView.classList.remove("whitescreen")});const RewardsBtn=document.querySelector("#rewards-btn"),RewardsView=document.querySelector("#rewards-view"),RewardsReturn=document.querySelector("#rewards-return");RewardsBtn.addEventListener("click",function(){RewardsView.classList.add("whitescreen")}),RewardsReturn.addEventListener("click",function(){RewardsView.classList.remove("whitescreen")});var ListRender=document.querySelector("#list-render");Sortable.create(ListRender,{animation:300});const HamburguerMenu=document.querySelector("#hamburguer-menu"),MenuItems=document.querySelector("#toggle-menu"),MainCards=document.querySelector("#main-cards"),BottomCards=document.querySelector("#bottom-menu"),Arrow=document.querySelector("#arrow");function CardPrincipal(){MainCards.classList.toggle("hide")}function CardsBottom(){BottomCards.classList.toggle("hide")}HamburguerMenu.addEventListener("click",function(e){MenuItems.classList.toggle("show"),MenuItems.classList.contains("show")?Arrow.style.transform="rotate(180deg)":Arrow.style.transform="rotate(0deg)",CardPrincipal(),CardsBottom(),e.stopPropagation()});let vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${vh}px`);var slider=tns({container:".my-slider",controls:!1,mouseDrag:!0,loop:!1,navPosition:"bottom",ArrowKeys:!0,center:!0,items:1});slider=tns({container:".invoice-slider",controls:!1,mouseDrag:!0,loop:!1,navPosition:"bottom",ArrowKeys:!0,center:!0,items:1});