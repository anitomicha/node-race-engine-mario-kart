const {
  rollDice,
  getBlock,
  calculatePoints,
} = require("../src/raceEngine");

describe("Race Engine", () => {
  test("rollDice deve retornar número entre 1 e 6", () => {
    const result = rollDice();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });

  test("getBlock deve retornar um bloco válido", () => {
    const block = getBlock();
    expect(["RETA", "CURVA", "CONFRONTO"]).toContain(block);
  });

  test("calculatePoints retorna speed em RETA", () => {
    const player = { speed: 4, handling: 3, power: 2 };
    const result = calculatePoints(player, "RETA");
    expect(result).toBe(4);
  });

  test("calculatePoints retorna handling em CURVA", () => {
    const player = { speed: 4, handling: 3, power: 2 };
    const result = calculatePoints(player, "CURVA");
    expect(result).toBe(3);
  });

  test("calculatePoints retorna power em CONFRONTO", () => {
    const player = { speed: 4, handling: 3, power: 2 };
    const result = calculatePoints(player, "CONFRONTO");
    expect(result).toBe(2);
  });
});