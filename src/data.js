// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// ordem numérica método sort


export const searchArcane = (dataTarot, type) => {
const filterType = (cards) => cards.type.toUpperCase().includes(type.toUpperCase());
const filteredType = dataTarot.filter(filterArcane);
  
return filteredArcano;
} 

export const typeFilter = (data, filter) => {
if (filter === "all") {
return data;
} else {
return data.filter((cards) => cards.type === filter);
}
};

export const searchSuit = (dataTarot, suit) => {
const filterSuit = (cards) => cards.suit.toUpperCase().includes(suit.toUpperCase());
const filteredSuit = dataTarot.filter(filterSuit);
  
return filteredSuit;
} -->

export const suitType = (data, filter) => {
if (filter === "all") {
return data;
} else {
return data.filter((cards) => cards.suit === filter);
}
};


// function ordenação(value, cards) {
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