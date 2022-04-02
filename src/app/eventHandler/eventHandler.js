import game from "../app";
import dom from "../dom/dom";

const eventHandler = (() => {
  const {
    shipsContainer,
    buttonsContainer,
    playerBoard,
    enemyBoard,
    removeShipsToDeploy,
    removeOccupied,
    removeHoveredElements,
    addOccupied,
    startGame,
    endGame,
    hoverOnBoard,
  } = dom;
  const { playerOne, playerTwo, checkWinCondition } = game;

  const clickHandler = () => {
    shipsContainer.addEventListener("click", (e) => {
      const allShips = document.querySelectorAll(".ship");
      if (e.target.dataset.type) {
        allShips.forEach((ship) => ship.setAttribute("selected", false));
        e.target.setAttribute("selected", true);
      }
    });

    enemyBoard.addEventListener("click", (e) => {
      if (e.target.classList.contains("square")) {
        const { x: xCoord, y: yCoord } = e.target.dataset;
        const canBeAttacked = playerTwo.ship.receiveAttack(xCoord, yCoord);

        if (canBeAttacked === "Hit") {
          e.target.classList.add("hit");
          e.target.classList.remove("hide-ship");
          game.computerAttack(); // Computer's turn
        } else if (canBeAttacked === "Miss") {
          e.target.classList.add("miss");
          game.computerAttack(); // Computer's turn
        }

        checkWinCondition(endGame);
      }
    });

    buttonsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("start-btn")) {
        const shipCount = playerOne.ship.getAllShips().length;
        if (shipCount >= 17) {
          startGame();
          game.createEnemyShips();
        }
      }
      if (e.target.classList.contains("auto-place")) {
        const getAllShips = playerOne.ship.getAllShips();
        if (!getAllShips.length) {
          game.createPlayerShips();
        } else {
          removeOccupied();
          playerOne.ship.resetBoard();
          game.createPlayerShips();
        }
        removeShipsToDeploy();
      }
    });
  };

  const dragHandler = () => {
    playerBoard.addEventListener("mouseover", (e) => {
      const selectedShip = document.querySelector(`[selected="${true}"]`);
      let canOccupy = false;
      let shipLength;
      let shipName;

      if (selectedShip) {
        shipName = selectedShip.dataset.type;
        shipLength = selectedShip.childElementCount;
        canOccupy = true;
      }
      if (canOccupy) {
        const { x: xCoord, y: yCoord } = e.target.dataset;
        hoverOnBoard(shipLength, xCoord, yCoord);

        e.target.addEventListener("mouseout", () => {
          removeHoveredElements();
        });

        e.target.addEventListener("click", () => {
          const canBeOccupied = playerOne.ship.placeShip(shipName, [
            +xCoord - (shipLength - 1),
            +yCoord,
          ]);

          if (canBeOccupied) {
            selectedShip.setAttribute("selected", false);
            selectedShip.setAttribute("hidden", true);
            addOccupied();
          }
        });
      }
    });
  };

  return { dragHandler, clickHandler };
})();

export default eventHandler;
