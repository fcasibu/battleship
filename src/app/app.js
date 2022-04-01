import Player from "./factories/Players";
import Computer from "./factories/ComputerPlayer";

const game = ((name) => {
  const player = new Player(name);
  const computer = new Computer();
  const playerBoard = document.querySelectorAll(
    ".player-board > .game-board > .square"
  );

  function computerAttack() {
    const { xCoord, yCoord } = computer.randomAttack(player.ship);
    for (let i = 0; i < playerBoard.length; i++) {
      const square = document.querySelector(
        `[data-x="${xCoord}"][data-y="${yCoord}"]`
      );
      if (square.classList.contains("occupied")) {
        square.classList.add("hit");
      } else {
        square.classList.add("miss");
      }
    }
    return { xCoord, yCoord };
  }

  function createComputerShips() {
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
  }

  return { player, computer, playerBoard, computerAttack, createComputerShips };
})();

export default game;
