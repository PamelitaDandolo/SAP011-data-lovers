// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


export const searchArcane = (dataTarot, type) => {
  if (type === "all") {
    return dataTarot
  }
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



// função do filtro por ordem crescente e decrescente
export const searchByCardValue = (dataTarot, value) =>{ //pq não tá brilhando?
const cardValue = (cards) => cards.value.sort(); 
  const searchValue = (cards, orderType) => { //oq vai ser ordenado, qual é a forma de ordenação
    const cardOrderValue = cards.sort((a,b) => {

if (a.value === b.value){
    return 0; //retornar todo o baralho
} else if(orderType === "ascending"){ //ordem crescente
    if (a.value < b.value){
      return -1;
    } 
} else if(orderType === "descending"){
    if (a.value > b.value){
        return 1;
    }

}
 return cardOrderValue //

});





//função do filtro por naipe
export const searchSuit = (dataTarot, suit) => {

  if (suit === "all") {
    return dataTarot
  }
  const filterSuit = (cards) => {
    if (cards.suit) {

      return cards.suit.toUpperCase().includes(suit.toUpperCase())
    }


    else {


      return false
    }

  };
  const filteredSuit = dataTarot.filter(filterSuit);



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

// Para inclusão do cálculo agregado
// export const calculoAgregado = (dois valores (baralho, id) => {
//   return ((id / baralho * 100)).toFixed (para retornar uma string com 2 casas decimais(2);
// }

