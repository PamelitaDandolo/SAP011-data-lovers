// import { 
// searchByName,
// filterArcane,

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

//Filtros

const arcaneType = document.getElementById('arcane-filter');
arcanosType.addEventListener('change', filtered);
function filtered() {
const arcanosFiltered = arcanosType.value;
}

const suitType = document.getElementById('suit-filter');
suitType.addEventListener('change', filtered);
function filteredSuits() {
const suitsFiltered = suitType.value;
}