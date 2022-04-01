import createBoard from "./board";
import createShips from "./ships";

const renderElements = (() => {
  // test
  const mainContent = document.querySelector(".player-board");

  mainContent.appendChild(createBoard());
  createShips();
  const squares = document.querySelectorAll(".square");
  for (let i = 0; i < 10 * 10; i++) {
    squares[i].setAttribute("data-index", i);
  }
})();

export default renderElements;
