import Ship from "./Ships";
import helpers from "../helpers/helpers";

export default function Gameboard() {
  const board = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => null)
  );
  const missedHits = [];

  function getBoard() {
    return board;
  }

  function getMissedHits() {
    return missedHits;
  }

  function placeShip(type, coord) {
    const getShip = helpers().SHIP_INFO[type];
    const ship = Ship(getShip);
    const x = coord[0];
    const y = coord[1];
    board[y][x] = ship;
  }

  function receiveAttack(x, y, attackPos) {
    if (board[y][x]) {
      return board[y][x].hit(attackPos);
    }
    missedHits.push({ x, y });
    return `Missed at x:${x} and y: ${y}`;
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

  function checkAllSunkShip() {
    return getAllShip().every((el) => el.isSunk());
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
    getMissedHits,
    checkAllSunkShip,
  };
}
