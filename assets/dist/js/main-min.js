function sliderShort(){const e=document.querySelector("#wrapperBoxes");let t,n,c,r,o=!1;e.addEventListener("mousedown",c=>{o=!0,n=c.pageX-e.offsetLeft,t=e.scrollLeft}),e.addEventListener("mousemove",a=>{a.preventDefault(),o&&(c=a.pageX-e.offsetLeft,r=c-n,e.scrollLeft=t-r)}),e.addEventListener("mouseup",e=>{o=!1})}window.onload=sliderShort;const sair=document.querySelector("#sair"),screen=document.querySelector("#mobile-screen");sair.addEventListener("click",function(){screen.classList.add("logoff")});const blockcardbtn=document.querySelector("#blockcard-btn"),blockcard=document.querySelector("#blockcard");blockcardbtn.addEventListener("click",function(){blockcard.classList.add("blockcard")}),blockcard.addEventListener("click",function(){blockcard.classList.remove("blockcard")});const orderbtn=document.querySelector("#order-btn"),orderoption=document.querySelector("#orderbtns"),orderclose=document.querySelector("#order-close");orderbtn.addEventListener("click",function(){orderoption.classList.add("blackscreen")}),orderclose.addEventListener("click",function(){orderoption.classList.remove("blackscreen")}),window.addEventListener("load",function(){var e=document.querySelector("#wrapperBoxes").querySelectorAll(".btn-item"),t=document.querySelector("#list-render");for(i=0;i<e.length-1;i++){var n=e[i].querySelector(".name-item").textContent,c=document.createElement("li");c.textContent=n,t.appendChild(c),c.classList.add("list-item-order"),c.innerHTML+='<i class="material-icons icon-order">reorder</i></li>'}},!1);const InvoiceBtn=document.querySelector("#invoice-btn"),InvoiceView=document.querySelector("#invoice-view"),InvoiceReturn=document.querySelector("#invoice-return");InvoiceBtn.addEventListener("click",function(){InvoiceView.classList.add("whitescreen")}),InvoiceReturn.addEventListener("click",function(){InvoiceView.classList.remove("whitescreen")});const InvoiceSearch=document.querySelector("#invoice-search"),InvoiceInput=document.querySelector("#invoice-search-input");function Pesquisar(){var e,t,n;for(e=document.getElementById("invoice-search-input").value.toUpperCase(),t=document.getElementById("invoice-list").getElementsByTagName("li"),n=0;n<t.length;n++)p=t[n].getElementsByTagName("p")[0],(p.textContent||p.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none"}InvoiceSearch.addEventListener("click",function(){InvoiceInput.style.cssText="display: inline",InvoiceInput.autofocus});const BalanceControl=document.querySelector("#balance-control"),Balance=document.querySelector("#balance");var prevBalance=Balance.innerHTML;BalanceControl.addEventListener("click",function(){Balance.classList.contains("balance-toggle")?Balance.innerHTML=prevBalance:Balance.textContent=" ",Balance.classList.toggle("balance-toggle")});const BalanceBtn=document.querySelector("#balance-btn"),BalanceView=document.querySelector("#balance-view"),BalanceReturn=document.querySelector("#balance-return");BalanceBtn.addEventListener("click",function(){BalanceView.classList.add("whitescreen")}),BalanceReturn.addEventListener("click",function(){BalanceView.classList.remove("whitescreen")});const RewardsBtn=document.querySelector("#rewards-btn"),RewardsView=document.querySelector("#rewards-view"),RewardsReturn=document.querySelector("#rewards-return");RewardsBtn.addEventListener("click",function(){RewardsView.classList.add("whitescreen")}),RewardsReturn.addEventListener("click",function(){RewardsView.classList.remove("whitescreen")});const HamburguerMenu=document.querySelector("#hamburguer-menu"),MenuItems=document.querySelector("#toggle-menu"),MainCards=document.querySelector("#main-cards"),BottomCards=document.querySelector("#bottom-menu"),Arrow=document.querySelector("#arrow");function CardPrincipal(){MainCards.classList.toggle("hide")}function CardsBottom(){BottomCards.classList.toggle("hide")}HamburguerMenu.addEventListener("click",function(e){MenuItems.classList.toggle("show"),MenuItems.classList.contains("show")?Arrow.style.transform="rotate(180deg)":Arrow.style.transform="rotate(0deg)",CardPrincipal(),CardsBottom(),e.stopPropagation()});let vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${vh}px`);