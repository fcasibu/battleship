import "./styles/style.scss";
import Player from "./app/factories/Players";
import Computer from "./app/factories/ComputerPlayer";
import dom from "./app/dom/dom";
import eventHandler from "./app/eventHandler/eventHandler";

// Test dom
const x = new Player("john");
const { computer } = eventHandler;

eventHandler.clickHandler();
eventHandler.dragHandler();
computer.ship.autoPlaceShips();

for (let i = 0; i < computer.ship.getBoard().length; i++) {
  const row = computer.ship.getBoard()[i];

  for (let j = 0; j < row.length; j++) {
    const enemyBoardContainer = document.querySelector(
      `.enemy-board .square[data-y="${i}"][data-x="${j}"]`
    );
    if (row[j]) {
      enemyBoardContainer.classList.add("placed", "hide-ship");
    }
  }
}
