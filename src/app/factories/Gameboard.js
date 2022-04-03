import Ship from "./Ships";
import helpers from "../helpers/helpers";

export default function Gameboard() {
  let board = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => "")
  );
  let shipsToDeploy = [
    "Carrier",
    "Battleship",
    "Cruiser",
    "Submarine",
    "Destroyer",
  ];
  const missedHits = [];
  const successfulHits = [];

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

  function checkSunkShip(xCoord, yCoord) {
    return !board[yCoord][xCoord] ? false : board[yCoord][xCoord].isSunk();
  }

  function checkAllSunkShip() {
    return getAllShips().every((ship) => ship.isSunk());
  }

  function checkBoardEdges(xCoord, yCoord, type) {
    const isNegative = xCoord < 0 || yCoord < 0;
    const isOverBoard = yCoord > 9;
    const isEdgeOfBoard = isNegative || isOverBoard;
    if ((type === "Carrier" && xCoord > 5) || isEdgeOfBoard) {
      return true;
    }
    if ((type === "Battleship" && xCoord > 6) || isEdgeOfBoard) {
      return true;
    }
    if (
      ((type === "Cruiser" || type === "Submarine") && xCoord > 7) ||
      isEdgeOfBoard
    ) {
      return true;
    }
    return (type === "Destroyer" && xCoord > 8) || isEdgeOfBoard;
  }

  function checkAvailableSpace(xCoord, yCoord, type, size) {
    const isEdgeOfBoard = checkBoardEdges(xCoord, yCoord, type);

    if (isEdgeOfBoard) return false;
    const leftOfShip = board[yCoord][xCoord];
    const rightOfShip = board[yCoord][xCoord + size - 1];

    return !(leftOfShip || rightOfShip);
  }

  function occupySpace(xCoord, yCoord, ship, size) {
    for (let i = 0; i < size; i++) {
      board[yCoord][xCoord + i] = ship;
    }
  }

  function placeShip(type, [xCoord, yCoord]) {
    const getShipInfo = helpers().shipsInfo[type];
    const ship = Ship(getShipInfo);
    occupySpace(xCoord, yCoord, ship, getShipInfo.size);
  }

  function isCoordinatesValid(xCoord, yCoord) {
    return xCoord < 0 || xCoord > 9 || yCoord < 0 || yCoord > 9;
  }

  function isShipDown(xCoord, yCoord) {
    return checkSunkShip(xCoord, yCoord);
  }

  function isSameAttackCoord(xCoord, yCoord) {
    return successfulHits.some(
      (hits) => hits.xCoord === xCoord && hits.yCoord === yCoord
    );
  }

  function isSameMissedAttackCoord(xCoord, yCoord) {
    return missedHits.some(
      (hits) => hits.xCoord === xCoord && hits.yCoord === yCoord
    );
  }

  function receiveAttack(xCoord, yCoord) {
    if (isCoordinatesValid(xCoord, yCoord)) return "Invalid coordinates";

    const coordinatesHasShip = board[yCoord][xCoord];

    if (isShipDown(xCoord, yCoord)) return false;
    if (isSameAttackCoord(xCoord, yCoord)) return false;
    if (isSameMissedAttackCoord(xCoord, yCoord)) return false;

    if (coordinatesHasShip) {
      const getNonHitLength = board[yCoord][xCoord].getNonHitPositions().length;
      successfulHits.push({ xCoord, yCoord });
      board[yCoord][xCoord].hit(getNonHitLength - 1);
      return "Hit";
    }
    missedHits.push({ xCoord, yCoord });
    return "Miss";
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

  function resetBoard() {
    board = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => "")
    );
    shipsToDeploy = [
      "Carrier",
      "Battleship",
      "Cruiser",
      "Submarine",
      "Destroyer",
    ];
  }

  return {
    getBoard,
    getAllShips,
    placeShip,
    receiveAttack,
    getMissedHits,
    checkAllSunkShip,
    checkAvailableSpace,
    checkBoardEdges,
    autoPlaceShips,
    resetBoard,
  };
}
