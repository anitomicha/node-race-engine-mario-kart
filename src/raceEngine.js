function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getBlock() {
  const blocks = ["RETA", "CURVA", "CONFRONTO"];
  return blocks[Math.floor(Math.random() * blocks.length)];
}

function calculatePoints(player, block) {
  if (block === "RETA") {
    return player.speed;
  }

  if (block === "CURVA") {
    return player.handling;
  }

  if (block === "CONFRONTO") {
    return player.power;
  }

  return 0;
}

module.exports = {
  rollDice,
  getBlock,
  calculatePoints,
};