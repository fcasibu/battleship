import Player from "./factories/Players";
import Computer from "./factories/ComputerPlayer";
import helpers from "./helpers/helpers";

const game = (() => {
  const { createRandomShips } = helpers();
  const playerOne = new Player();
  const playerTwo = new Computer();
  const playerBoard = document.querySelectorAll(
    ".player-board > .game-board > .square"
  );

  function computerAttack() {
    const { xCoord, yCoord } = playerTwo.randomAttack(playerOne.ship);
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

  function createEnemyShips() {
    createRandomShips(playerTwo, "enemy-board");
  }

  function createPlayerShips() {
    createRandomShips(playerOne, "player-board");
  }

  function checkWinCondition(endGame) {
    const allEnemyShipDown = playerTwo.ship.checkAllSunkShip();
    const allPlayerShipDown = playerOne.ship.checkAllSunkShip();

    if (allEnemyShipDown) {
      endGame();
    }
    if (allPlayerShipDown) {
      endGame();
    }
  }

  return {
    playerOne,
    playerTwo,
    playerBoard,
    computerAttack,
    createEnemyShips,
    createPlayerShips,
    checkWinCondition,
  };
})();

export default game;
