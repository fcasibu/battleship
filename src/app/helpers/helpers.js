export default function helpers() {
  const shipsInfo = {
    Carrier: { type: "Carrier", size: 5 },
    Battleship: { type: "Battleship", size: 4 },
    Cruiser: { type: "Cruiser", size: 3 },
    Submarine: { type: "Submarine", size: 3 },
    Destroyer: { type: "Destroyer", size: 2 },
  };

  function getRandomShip(ship) {
    const randomShip = ship[Math.floor(Math.random() * ship.length)];
    return ship.splice(ship.indexOf(randomShip), 1);
  }

  return { shipsInfo, getRandomShip };
}
