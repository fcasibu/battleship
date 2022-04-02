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
    startGame,
    endGame,
    hoverOnBoard,
  } = dom;
  const { playerOne, playerTwo, checkWinCondition } = game;

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
        const xCoord = e.target.dataset.x;
        const yCoord = e.target.dataset.y;
        hoverOnBoard(shipLength, xCoord, yCoord);

        e.target.addEventListener("mouseout", () => {
          const hoveredElements = document.querySelectorAll(".hovered");
          hoveredElements.forEach((element) =>
            element.classList.remove("hovered")
          );
        });

        e.target.addEventListener("click", () => {
          const hoveredElements = document.querySelectorAll(".hovered");
          const canBeOccupied = playerOne.ship.placeShip(shipName, [
            xCoord - (shipLength - 1),
            yCoord,
          ]);

          if (canBeOccupied) {
            hoveredElements.forEach((element) =>
              element.classList.add("occupied")
            );
            selectedShip.setAttribute("selected", false);
            selectedShip.setAttribute("hidden", true);
          }
        });
      }
    });
  };

  const clickHandler = () => {
    shipsContainer.addEventListener("click", (e) => {
      if (e.target.dataset.type) {
        e.target.setAttribute("selected", true);
      }
    });

    enemyBoard.addEventListener("click", (e) => {
      if (e.target.classList.contains("square")) {
        const xCoord = e.target.dataset.x;
        const yCoord = e.target.dataset.y;
        const canBeAttacked = playerTwo.ship.receiveAttack(xCoord, yCoord);

        if (canBeAttacked === "Hit") {
          e.target.classList.add("hit");
          e.target.classList.remove("hide-ship");
          game.computerAttack();
        } else if (canBeAttacked === "Miss") {
          e.target.classList.add("miss");
          game.computerAttack();
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

  return { dragHandler, clickHandler };
})();

export default eventHandler;
