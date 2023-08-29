// import { 
// searchByName,
// filterArcane,

import * as data from './data/tarot/tarot.js' ;


const cardsContainer = document.querySelector("#cards-container");//chamando pela classe usa o . e pelo id #
const dataTarot = data.cards;
function exposeCards(data){
const exposeCards = document.querySelector("#info-cards");//mudei para "flipper-card"
exposeCards.innerHTML = "";
data.forEach((dataTarot) => {
  const container = document.createElement("div");
  container.classList.add("style-container");//mudei isso, recapitular com a BIa
  const showCards = `
  <img class="show-img" src="${dataTarot.img}">`;

  container.innerHTML = showCards
  exposeCards.appendChild(container)


});
}

window.addEventListener("load", () => {
    exposeCards(dataTarot)

});

console.log(cards-container);
console.log(data.default.cards);
// console.log(data.default.cards[0]);

// cardsContainer.innerHTML= 
// `<h1 class="title">${data.default.cards[0].name}</h1>
//  <img src="${data.default.cards[0].img}">`; 



// let player = function(){
//     //chamar pelo idcha
//mostrar um card com todas as funcionalidades:

