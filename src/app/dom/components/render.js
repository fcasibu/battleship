import createBoard from "./board";
import createShips from "./ships";

const renderElements = (() => {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");
  const player = createBoard();
  const computer = createBoard();
  computer.classList.add("hide-board");
  playerBoard.appendChild(player);
  enemyBoard.appendChild(computer);
  createShips();
  const squares = document.querySelectorAll(".square");
  for (let i = 0; i < 10 * 10; i++) {
    squares[i].setAttribute("data-index", i);
  }
})();

export default renderElements;
