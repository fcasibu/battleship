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

  function createRandomShips(player, playerBoardClass) {
    player.ship.autoPlaceShips();

    if (playerBoardClass === "player-board") {
      for (let i = 0; i < player.ship.board.length; i++) {
        const row = player.ship.board[i];

        for (let j = 0; j < row.length; j++) {
          const playerBoard = document.querySelector(
            `.${playerBoardClass} > .game-board .square[data-y="${i}"][data-x="${j}"]`
          );
          if (row[j]) {
            playerBoard.classList.add("occupied");
          }
        }
      }
    }
  }

  return {
    shipsInfo,
    getRandomShip,
    getRandomName,
    addAttributesToSquare,
    createRandomShips,
  };
}
