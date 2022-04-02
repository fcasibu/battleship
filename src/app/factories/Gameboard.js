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

  function checkBoardEdges(type, xCoord, yCoord) {
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
    if ((type === "Destroyer" && xCoord > 8) || isEdgeOfBoard) {
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
      return false;
    }
    const isSpaceOccupied = occupySpace(xCoord, yCoord, ship, getShipInfo.size);
    if (isSpaceOccupied) {
      return false;
    }
    return true;
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
    checkBoardEdges,
    autoPlaceShips,
    resetBoard,
  };
}
