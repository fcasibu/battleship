import helpers from "../../helpers/helpers";

export default function createBoard() {
  const boardContainer = document.createElement("div");
  const yCoordinateContainer = document.createElement("div");
  const xCoordinateContainer = document.createElement("div");
  const BOARD_SIZE = 10;
  yCoordinateContainer.classList.add("y-coordinates");
  xCoordinateContainer.classList.add("x-coordinates");
  boardContainer.classList.add("game-board");
  for (let i = 0; i < BOARD_SIZE; i++) {
    const yCoordinates = document.createElement("div");
    const xCoordinates = document.createElement("div");
    yCoordinates.classList.add("y-coordinate");
    xCoordinates.classList.add("x-coordinate");
    yCoordinates.textContent = i;
    xCoordinates.textContent = i;
    yCoordinateContainer.appendChild(yCoordinates);
    xCoordinateContainer.appendChild(xCoordinates);
    boardContainer.prepend(yCoordinateContainer);
    boardContainer.prepend(xCoordinateContainer);
    for (let j = 0; j < BOARD_SIZE; j++) {
      const squares = document.createElement("div");
      helpers().addAttributesToSquare(squares, j, i);
      boardContainer.appendChild(squares);
    }
  }

  return boardContainer;
}
