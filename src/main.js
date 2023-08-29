// import { 
// searchByName,
// filterArcane,

import * as data from './data/tarot/tarot.js' ;

// //mostrar a carta no html
const cardsContainer = document.querySelector("#cards-container");//chamando pela classe usa o . e pelo id #
const dataTarot = data.cards;
function exposeCards(data){
  const exposeCards = document.querySelector("#flipper-card");
  exposeCards.innerHTML += "";
  data.forEach((dataTarot) => {
    const container = document.createElement("div");
    container.classList.add("front");
    const showCards = 
  `<div class="show-img" style="background-image: url('${dataTarot.img}')"></div>`;

    container.innerHTML += showCards
    exposeCards.appendChild(container)


});
}

window.addEventListener("load", () => {
  exposeCards(dataTarot)

});

// console.log(cards-container);
// console.log(data.default.cards);
// console.log(data.default.cards[0]);

// cardsContainer.innerHTML= 
// `<h1 class="title">${data.default.cards[0].name}</h1>
//  <img src="${data.default.cards[0].img}">`; 



// let player = function(){
//     //chamar pelo idcha
//mostrar um card com todas as funcionalidades:

// function containerWithCards(data) {
//   const cardsContainer = document.querySelector("#cards-container");
//   cardsContainer.innerHTML = data.map(
//     (cards) =>
//       `<li class="card">
// <h4 class="arcane-name">${cards.name}</h4>
// <img class="show-img" src=${cards.img}/>
// </li>`
//   )
//     .join("");
// }