import createBoard from "./board";
import createShips from "./ships";

export default function renderBoard() {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");
  const player = createBoard();
  const playerTwo = createBoard();
  playerTwo.classList.add("hide-board");
  playerBoard.appendChild(player);
  enemyBoard.appendChild(playerTwo);
  createShips();
}
