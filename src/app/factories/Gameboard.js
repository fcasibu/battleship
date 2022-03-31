import Ship from "./Ships";
import helpers from "../helpers/helpers";

export default function Gameboard() {
  const board = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => null)
  );
  const missedHits = [];
  const successfulHits = [];

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

  function checkBoardEdges(type, x) {
    if ((type === "Carrier" && x > 5) || x < 0) {
      return true;
    }
    if ((type === "Battleship" && x > 6) || x < 0) {
      return true;
    }
    if (((type === "Cruiser" || type === "Submarine") && x > 7) || x < 0) {
      return true;
    }
    if ((type === "Destroyer" && x > 8) || x < 0) {
      return true;
    }
    return false;
  }

  function occupySpace(xCoord, yCoord, ship, size) {
    const isOccupied = false;
    for (let i = 0; i < size; i++) {
      if (board[yCoord][xCoord - 1 + size] || board[yCoord][xCoord + i]) {
        return true;
      }
      board[yCoord][xCoord + i] = ship;
    }
    return isOccupied;
  }

  function placeShip(type, coord) {
    const getShip = helpers().SHIP_INFO;
    const ship = Ship(getShip[type]);
    const xCoord = coord[0];
    const yCoord = coord[1];
    const isShipOnEdgeOfBoard = checkBoardEdges(type, xCoord);
    if (isShipOnEdgeOfBoard) {
      return `${type} can't be placed there`;
    }
    if (occupySpace(xCoord, yCoord, ship, getShip[type].size)) {
      return "Position is Occupied";
    }
    return "Ship placed successfully";
  }

  function receiveAttack(x, y) {
    const isSameAttackPos = successfulHits.some(
      (coord) => coord.x === x && coord.y === y
    );
    if (x < 0 || x > 9 || y < 0 || y > 9) return "Invalid coordinates";
    const isShipDown = checkSunkShip(x, y);
    if (isShipDown) return "Ship has sunk";
    if (isSameAttackPos) return "Can't attack the same coordinates";

    if (board[y][x]) {
      const getNonHitLength = board[y][x].getNonHitPositions().length;
      successfulHits.push({ x, y });
      board[y][x].hit(getNonHitLength - 1);
      return `Position x: ${x} and y: ${y} has been hit`;
    }
    missedHits.push({ x, y });
    return `Missed at x: ${x} and y: ${y}`;
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
    getMissedHits,
    checkAllSunkShip,
    checkBoardEdges,
  };
}
