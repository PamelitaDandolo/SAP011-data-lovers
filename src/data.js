// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// ordem numérica método sort


<<<<<<< HEAD
import { createDecipheriv } from "crypto";

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};



//     <!--Lógica filtro Arcanos 
//     export const searchArcano = (dataTarot, type) => {
//     const filterType =  => baralho.type.toUpperCase().includes(type.toUpperCase());
//     const filteredType = dataTarot.filter(filterArcano);
  
//     return filteredArcano;
//   } -->

<<<<<<< HEAD
  // export const filterType = (data, filter) => {
  //   if (filter === "All") {
  //     return data;
  //   } else {
  //     return data.filter((baralho) => baralho.arcano === filter);
  //   }
  // };
=======
//   export const filterType = (data, filter) => {
//     if (filter === "All") {
//       return data;
//     } else {
//       return data.filter((baralho) => baralho.arcano === filter);
//     }
//   };
// MAIN
//   const arcanosType = document.getElementById('arcane-filter');
// arcanosType.addEventListener('change', filtered);
// function filtered() {
//   const arcanosFiltered = arcanosType.value;
>>>>>>> 71999ff179a58f5b714b59d25ccb83d188214fb9
=======
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
>>>>>>> d64f1ed6cb3a687ab61d45ab1f2be4b50fa2e1a6
