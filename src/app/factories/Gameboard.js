import Ship from "./Ships";
import helpers from "../helpers/helpers";

export default function Gameboard() {
  const board = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => null)
  );
  const missedHits = [];
  const successfulHits = [];
  const shipsToDeploy = [
    "Carrier",
    "Battleship",
    "Cruiser",
    "Submarine",
    "Destroyer",
  ];

  function getBoard() {
    return board;
  }

  function getMissedHits() {
    return missedHits;
  }

  function getAllShip() {
    const shipArr = [];
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] !== null) {
          shipArr.push(row[j]);
        }
      }
    }
    return shipArr;
  }

  function checkSunkShip(x, y) {
    return board[y][x] === null ? false : board[y][x].isSunk();
  }

  function checkAllSunkShip() {
    return getAllShip().every((el) => el.isSunk());
  }

  function checkBoardEdges(type, x, y) {
    const isNegative = x < 0 || y < 0;
    const isOverBoard = y > 9;
    const isEdgeOfBoard = isNegative || isOverBoard;
    if ((type === "Carrier" && x > 5) || isEdgeOfBoard) {
      return true;
    }
    if ((type === "Battleship" && x > 6) || isEdgeOfBoard) {
      return true;
    }
    if (
      ((type === "Cruiser" || type === "Submarine") && x > 7) ||
      isEdgeOfBoard
    ) {
      return true;
    }
    if ((type === "Destroyer" && x > 8) || isEdgeOfBoard) {
      return true;
    }
    return false;
  }

  function occupySpace(xCoord, yCoord, ship, size) {
    for (let i = 0; i < size; i++) {
      if (board[yCoord][xCoord - 1 + size] || board[yCoord][xCoord + i]) {
        return true;
      }
      board[yCoord][xCoord + i] = ship;
    }
    return false;
  }

  function placeShip(type, [xCoord, yCoord]) {
    const getShipInfo = helpers().shipsInfo[type];
    const ship = Ship(getShipInfo);
    const isShipOnEdgeOfBoard = checkBoardEdges(type, xCoord, yCoord);
    const isSpaceOccupied = occupySpace(xCoord, yCoord, ship, getShipInfo.size);
    if (isShipOnEdgeOfBoard) {
      return `${type} can't be placed there`;
    }
    if (isSpaceOccupied) {
      return "Position is Occupied";
    }
    return "Ship placed successfully";
  }

  function receiveAttack(x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9) return "Invalid coordinates";

    const coordinatesHasShip = board[y][x];
    const isShipDown = checkSunkShip(x, y);
    const isSameAttackCoord = successfulHits.some(
      (coord) => coord.x === x && coord.y === y
    );
    const isSameMissedAttackCoord = missedHits.some(
      (coord) => coord.x === x && coord.y === y
    );

    if (isShipDown) return "Ship has sunk";
    if (isSameAttackCoord) return "Can't attack the same coordinates";
    if (isSameMissedAttackCoord) return "Can't attack the same coordinates";
    if (coordinatesHasShip) {
      const getNonHitLength = board[y][x].getNonHitPositions().length;
      successfulHits.push({ x, y });
      board[y][x].hit(getNonHitLength - 1);
      return `Position x: ${x} and y: ${y} has been hit`;
    }
    missedHits.push({ x, y });
    return `Missed at x: ${x} and y: ${y}`;
  }

  function randomizeShipPlacement() {
    const SHIP_COUNT = 5;

    for (let i = 0; i < SHIP_COUNT; i++) {
      const randomShip = helpers().getRandomShip(shipsToDeploy);
      const randomIndex = Math.floor(Math.random() * (SHIP_COUNT + 1));
      placeShip(randomShip, [randomIndex, i]);
    }
  }

  function randomizeBoard() {
    for (let i = board.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [board[i], board[randomIndex]] = [board[randomIndex], board[i]];
    }
  }

  function autoPlaceShips() {
    randomizeShipPlacement();
    randomizeBoard();
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
    getMissedHits,
    checkAllSunkShip,
    checkBoardEdges,
    autoPlaceShips,
  };
}
