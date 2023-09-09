import { searchArcane, searchSuit, searchByCardValue } from './data.js'


import data from './data/tarot/tarot.js' ;

//mostrar a carta no html 
const cardsContainer = document.querySelector("#cards-container"); //chamando pela classe usa o . e pelo id #
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



//chama filtro de ordenação crescente decrescente
const cardValueSelection = document.getElementById("numerical-order");
cardValueSelection.addEventListener("change", cardOrdenation); //evento mudar de ordenação
function cardOrdenation() {
  const cardSelected = cardValueSelection.value; //chamando a numeração da carta
  const chooseCard = searchByCardValue(dataTarot,cardSelected)
  exposeCards(chooseCard)
}


//chama o filtro por arcano
const arcaneType = document.getElementById("arcane-filter");
arcaneType.addEventListener("change", filtered);
function filtered() {
  const arcaneSelected = arcaneType.value;
  const arcaneFiltered = searchArcane(dataTarot,arcaneSelected)
  exposeCards(arcaneFiltered)
}


//chama o filtro por naipe
const suitType = document.getElementById("tarot-deck"); 
suitType.addEventListener("change", filteredSuits);
function filteredSuits() {
  const suitsSelected = suitType.value;
  const suitsFiltered = searchSuit(dataTarot,suitsSelected)
  exposeCards(suitsFiltered)
}


//chama cálculo agregado