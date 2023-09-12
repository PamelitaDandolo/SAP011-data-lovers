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
// export const calculoAgregado = (dois elementos (dataTarot, elementos filtrados) => {
//   return ((id * 100 / baralho)).toFixed (para retornar uma string com 2 casas decimais(2);
// }


