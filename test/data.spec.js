
import { searchArcane, typeFilter, orderCard,  searchSuit, suitType } from "../src/data.js";


const tarot = [
  {
    type: "major",
    value: 0,
    suit: "wands",
    name: "The Fool"
  },
  {
    type: "major",
    value: 1,
    suit: "pentacles",
    name: "The Magician",
  },
  {
    type: "minor",
    value: 2,
    suit: "swords",
    name: "The High Priestess",
  },
  {
    type: "minor",
    value: 14,
    suit: "cups",
    name: "King of Cups",
  },
];


//teste para busca por arcano
describe("searchArcane", () => {
  it("is a function", () => {
    expect(typeof searchArcane).toBe("function");
  });

  it("returns `search for a major arcane`", () => {
    expect(searchArcane(tarot, "major")).toStrictEqual([tarot[0], tarot[1]]);
  });

  it("returns `search for a minor arcane`", () => {
    expect(searchArcane(tarot, "minor")).toStrictEqual([tarot[2], tarot[3]]);
  });

  it("returns `search for all object`", () => {
    expect(searchArcane(tarot, "all")).toStrictEqual([tarot[0], tarot[1],tarot[2],tarot[3]]);
  });
});


describe("typeFilter", () => {
  it("is a function", () => {
    expect(typeof typeFilter).toBe("function");
  });

  it("returns `filter only the cards`", () => {
    expect(typeFilter(tarot, "all")).toStrictEqual([tarot[0],tarot[1],tarot[2],tarot[3]]);
  });

  it("returns `filter cards when filtered`", () => {
    expect(typeFilter(tarot, "all")).toEqual([tarot[0],tarot[1],tarot[2],tarot[3]]);
  });

  //linha 24 retorna data, ou seja, todo o objeto
  it("returns `empty`", () => {
    expect(typeFilter(tarot)).toStrictEqual([]);
  });

});



//teste para busca por ordenação
describe("orderCard", () => {
  it("is a function", () => {
    expect(typeof orderCard).toBe("function");
  });

  it("returns `search for ascending order of the cards`", () => {
    expect(orderCard(tarot, "ascending")).toStrictEqual([tarot[0], tarot[1],tarot[2],tarot[3]]);
  });

  it("returns `search for descending order of the cards`", () => {
    expect(orderCard(tarot,"descending")).toStrictEqual([tarot[3], tarot[2],tarot[1],tarot[0]]);
  });

  it("returns `search for all cards`", () => {
    expect(orderCard(tarot, "all")).toStrictEqual([tarot[0], tarot[1],tarot[2],tarot[3]]);
  });

  //linha 34
  it("returns `same order`", () => {
    expect(orderCard([tarot[0], tarot[0]], "all")).toStrictEqual([tarot[0], tarot[0]]);
  });

});


//teste para busca por naipe
describe("searchSuit", () => {
  it("is a function", () => {
    expect(typeof searchSuit).toBe("function");
  });

  it("returns `filter wands`", () => {
    expect(searchSuit(tarot,"wands")).toStrictEqual([tarot[0]]);
  });

  it("returns `filter pentacles`", () => {
    expect(searchSuit(tarot,"pentacles")).toStrictEqual([tarot[1]]);
  });

  it("returns `filter swords`", () => {
    expect(searchSuit(tarot, "swords")).toStrictEqual([tarot[2]]);
  });

  it("returns `filter cups`", () => {
    expect(searchSuit(tarot, "cups")).toStrictEqual([tarot[3]]);
  });

  it("returns `search for all suits`", () => {
    expect(searchSuit(tarot, "all")).toStrictEqual([tarot[0], tarot[1],tarot[2],tarot[3]]);
  });

  //linha 58
  it("returns `empty`", () => {
    expect(searchSuit([{name: "the fool"}])).toStrictEqual([]);
  });

});

describe("suitType", () => {
  it("is a function", () => {
    expect(typeof suitType).toBe("function");
  });

  it("returns `all`", () => {
    expect(suitType(tarot,"all")).toStrictEqual([tarot[0], tarot[1],tarot[2],tarot[3]]);
  });

  it("returns `swords cards`", () => {
    expect(suitType(tarot,"swords")).toStrictEqual([tarot[2]]);
  });

  it("returns `empty`", () => {
    expect(suitType([{name: "the fool"}])).toStrictEqual([]);
  });
});