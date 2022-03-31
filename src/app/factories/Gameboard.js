import Ship from "./Ships";
import helpers from "../helpers/helpers";

export default function Gameboard() {
  const board = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => "")
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

  function getAllShips() {
    const deployedShips = [];
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j]) {
          deployedShips.push(row[j]);
        }
      }
    }
    return deployedShips;
  }

  function checkSunkShip(x, y) {
    return !board[y][x] ? false : board[y][x].isSunk();
  }

  function checkAllSunkShip() {
    return getAllShips().every((ship) => ship.isSunk());
  }

  function checkBoardEdges(type, x, y) {
    const isNegative = x < 0 || y < 0;
    const isOverBoard = y > 9;
    const isEdgeOfBoard = isNegative || isOverBoard;
    if ((type === "Carrier" && x > 5) || y > 5 || isEdgeOfBoard) {
      return true;
    }
    if ((type === "Battleship" && x > 6) || y > 6 || isEdgeOfBoard) {
      return true;
    }
    if (
      ((type === "Cruiser" || type === "Submarine") && x > 7) ||
      y > 7 ||
      isEdgeOfBoard
    ) {
      return true;
    }
    if ((type === "Destroyer" && x > 8) || y > 8 || isEdgeOfBoard) {
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
    if (isShipOnEdgeOfBoard) {
      return `${type} can't be placed there`;
    }
    const isSpaceOccupied = occupySpace(xCoord, yCoord, ship, getShipInfo.size);
    if (isSpaceOccupied) {
      return "Position is Occupied";
    }
    return "Ship placed successfully";
  }

  function receiveAttack(xCoord, yCoord) {
    if (xCoord < 0 || xCoord > 9 || yCoord < 0 || yCoord > 9)
      return "Invalid coordinates";

    const coordinatesHasShip = board[yCoord][xCoord];
    const isShipDown = checkSunkShip(xCoord, yCoord);
    const isSameAttackCoord = successfulHits.some(
      (hits) => hits.xCoord === xCoord && hits.yCoord === yCoord
    );
    const isSameMissedAttackCoord = missedHits.some(
      (hits) => hits.xCoord === xCoord && hits.yCoord === yCoord
    );

    if (isShipDown) return "Ship has sunk";
    if (isSameAttackCoord) return "Can't attack the same coordinates";
    if (isSameMissedAttackCoord) return "Can't attack the same coordinates";

    if (coordinatesHasShip) {
      const getNonHitLength = board[yCoord][xCoord].getNonHitPositions().length;
      successfulHits.push({ xCoord, yCoord });
      board[yCoord][xCoord].hit(getNonHitLength - 1);
      return `Position x: ${xCoord} and y: ${yCoord} has been hit`;
    }
    missedHits.push({ xCoord, yCoord });
    return `Missed at x: ${xCoord} and y: ${yCoord}`;
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
