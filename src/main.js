import { searchArcane, searchSuit, typeFilter, searchByCardValue} from './data.js'


import data from './data/tarot/tarot.js' ;

const cardsContainer = document.querySelector("#cards-container");
const dataTarot = data.cards;
function exposeCards(data){

  const exposeCards = document.querySelector("#expose-card");
  exposeCards.innerHTML = "";
  data.forEach((tarot) => {
    const container = document.createElement("div");
    container.classList.add("show-img");
    const showCards = 
    `<div class="show-img">
    <img class="card-style" src="${tarot.img}" alt="Card Image"> 
    </div>`;

    container.innerHTML += showCards
    exposeCards.appendChild(container)
    

  });
  cardsContainer.innerHTML += exposeCards
}

window.addEventListener("load", () => {
  exposeCards(dataTarot)

})


//Filtro por ordenação crescente e decrescente
// const tarotValue = document.getElementById('numerical-order');

//chamar searchbycard...








//Filtro por arcanos
const arcaneType = document.getElementById('arcane-filter');
arcaneType.addEventListener('change', filtered);
function filtered() {
  const arcaneSelected = arcaneType.value;
  const arcaneFiltered = searchArcane(dataTarot,arcaneSelected)
  exposeCards(arcaneFiltered)
}


//filtro por naipe
const suitType = document.getElementById('tarot-deck');
suitType.addEventListener('change', filteredSuits);
function filteredSuits() {
  const suitsSelected = suitType.value;
  const suitsFiltered = searchSuit(dataTarot,suitsSelected)
  exposeCards(suitsFiltered)
}


