import createBoard from "./board";
import createShips from "./ships";

const renderElements = (() => {
  // test
  const mainContent = document.querySelector(".player-board");
  const mainContent1 = document.querySelector(".enemy-board");

  mainContent.appendChild(createBoard());
  mainContent1.appendChild(createBoard());
  createShips();
  const squares = document.querySelectorAll(".square");
  for (let i = 0; i < 10 * 10; i++) {
    squares[i].setAttribute("data-index", i);
  }
})();

export default renderElements;
