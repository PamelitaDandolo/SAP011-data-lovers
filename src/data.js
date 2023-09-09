// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// ordem numérica método sort filtro
export const searchByCardValue = (dataTarot, value) =>{
const cardValue = (cards) => cards.value.sort(); 
const searchByCardValue = (cards, orderType) => { //oq vai ser ordenado, qual é a forma de ordenação
    const cardValue =  cards.sort((a,b) => {

if (a.value === b.value){
    return 0;//retornar todo o baralho
} else if(orderType === 'ascending'){ //ordem crescente
    if (a.value > b.value){
        return 1;
    } 
} else if(orderType === 'descending'){
    if (a.value > b.value){
        return -1;
    }
}

return cardValue
});



//filtros de ordenação
export const searchArcane = (dataTarot, type) => {
  const filterType = (cards) => cards.type.toUpperCase().includes(type.toUpperCase());
  const filteredType = dataTarot.filter(filterType);

  return filteredType;
}

export const typeFilter = (data, filter) => {
  if (filter === "all") {
    return data;
  } else {
    return data.filter((cards) => cards.type === filter);
  }
};


//filtro por naipe
export const searchSuit = (dataTarot, suit) => {
  if (suit === "all") { 
    return dataTarot //select todas as cartas
  }
  const filterSuit = (cards) => { //seleciona por naipe 
    if (cards.suit) {

      return cards.suit.toUpperCase().includes(suit.toUpperCase())
    }

    else {

      return false
    }

  };
  const filteredSuit = dataTarot.filter(filterSuit);

  return filteredSuit;
}


export const suitType = (data, filter) => {
  if (filter === "all") {
    return data;
  } else {
    return data.filter((cards) => {
      if (cards.suit) {
        return cards.suit === filter
      }
      else {
        return false
      }
    });
  }
};




// cálculo agregado
//porcentagem de arcanos maiores


//porcentagem de arcanos menores


// function ordenação(cards, value) {
//   const orderFilter = [...cards];
//   if (value === "ascending") {
//     orderFilter.sort(function (a, b) {
//     return a.value - b.value; 
//     });
//   } else if (value === "descending") {
//     orderFilter.sort(function (a, b) {
//     return b.value - a.value; 
//     });
//   }
//   return orderFilter;
// }

// const dataTarot = data.cards;
// const numericalFilter = document.querySelectorAll(".order-filter");

// numericalFilter.forEach((order) => {
//   order.addEventListener("change", () => {
//     const orderNumerical = ordenação(order.value, dataTarot);
//     renderFilteredCards(orderNumerical);
//   });
// });