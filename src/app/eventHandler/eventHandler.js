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
        allShips.forEach((ship) => ship.setAttribute("selected", "false"));
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
        const isShipContainerEmpty = playerOne.ship.getAllShips().length;
        console.log(isShipContainerEmpty);
        if (!isShipContainerEmpty) {
          game.createPlayerShips();
        } else {
          removeOccupied();
          playerOne.ship.resetBoard();
          game.createPlayerShips();
        }
        removeShipsToDeploy();
      }
    });

    playerBoard.addEventListener("click", (e) => {
      if (e.target.classList.contains("square")) {
        const selectedShip = document.querySelector(`[selected="${true}"]`);

        if (selectedShip) {
          const shipName = selectedShip.dataset.type;
          const shipLength = selectedShip.childElementCount;
          const { x: xCoord, y: yCoord } = e.target.dataset;
          console.log(playerOne.ship.board);
          const isSpaceAvailable = playerOne.ship.checkAvailableSpace(
            +xCoord - (shipLength - 1),
            +yCoord,
            shipName,
            shipLength
          );

          if (isSpaceAvailable) {
            playerOne.ship.placeShip(shipName, [
              +xCoord - (shipLength - 1),
              +yCoord,
            ]);
            addOccupied();
            selectedShip.setAttribute("selected", "false");
            selectedShip.setAttribute("hidden", "true");
          }
        }
      }
    });
  };

  const hoverHandler = () => {
    playerBoard.addEventListener("mouseover", (e) => {
      const selectedShip = document.querySelector(`[selected="${true}"]`);
      let canHoverOnBoard = false;
      let shipLength;

      if (selectedShip) {
        shipLength = selectedShip.childElementCount;
        canHoverOnBoard = true;
      }
      if (canHoverOnBoard) {
        const { x: xCoord, y: yCoord } = e.target.dataset;
        hoverOnBoard(xCoord, yCoord, shipLength);

        e.target.addEventListener("mouseout", () => {
          removeHoveredElements();
        });
      }
    });
  };

  return { hoverHandler, clickHandler };
})();

export default eventHandler;
