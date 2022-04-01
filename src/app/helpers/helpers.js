export default function helpers() {
  const shipsInfo = {
    Carrier: { type: "Carrier", size: 5 },
    Battleship: { type: "Battleship", size: 4 },
    Cruiser: { type: "Cruiser", size: 3 },
    Submarine: { type: "Submarine", size: 3 },
    Destroyer: { type: "Destroyer", size: 2 },
  };

  const computerNames = [
    "Ferdinand Magellan",
    "Bartholomew Roberts",
    "Horatio Nelson",
    "John Rackham",
    "William Kidd",
    "Francis Drake",
    "Christopher Columbus",
    "Edward Teach",
    "Henry Morgan",
    "James Cook",
  ];

  function addAttributesToSquare(squares, x, y) {
    squares.classList.add("square");
    squares.dataset.y = x;
    squares.dataset.x = y;
  }

  function getRandomName() {
    return computerNames[Math.floor(Math.random() * computerNames.length)];
  }

  function getRandomShip(ship) {
    const randomShip = ship[Math.floor(Math.random() * ship.length)];
    return ship.splice(ship.indexOf(randomShip), 1);
  }

  return { shipsInfo, getRandomShip, getRandomName, addAttributesToSquare };
}
