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
} -->

export const typeFilter = (data, filter) => {
  if (filter === "all") {
  return data;
  } else {
  return data.filter((cards) => cards.type === filter);
  }
  };

export const searchSuit = (dataTarot, suits) => {
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

