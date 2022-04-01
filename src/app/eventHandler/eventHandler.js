import game from "../app";

const eventHandler = (() => {
  const { player } = game;
  const { computer } = game;
  const optionsMenu = document.querySelector(".options");
  const shipsContainer = document.querySelector(".ships-container");
  const playerBoard = document.querySelector(".player-board > .game-board");
  const enemyBoard = document.querySelector(".enemy-board > .game-board");

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
        for (let i = 0; i < shipLength; i++) {
          const square = document.querySelector(
            `[data-x="${xCoord - i}"][data-y="${yCoord}"]`
          );

          if (square) {
            square.classList.add("hovered");
          }
        }
        e.target.addEventListener("mouseout", () => {
          const hoveredElements = document.querySelectorAll(".hovered");
          hoveredElements.forEach((element) =>
            element.classList.remove("hovered")
          );
        });

        e.target.addEventListener("click", () => {
          const hoveredElements = document.querySelectorAll(".hovered");
          const canBeOccupied = player.ship.placeShip(shipName, [
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
    const startBtn = document.querySelector(".start-btn");

    shipsContainer.addEventListener("click", (e) => {
      if (e.target.dataset.type) {
        e.target.setAttribute("selected", true);
      }
    });

    enemyBoard.addEventListener("click", (e) => {
      if (e.target.classList.contains("square")) {
        const xCoord = e.target.dataset.x;
        const yCoord = e.target.dataset.y;
        const canBeAttacked = computer.ship.receiveAttack(xCoord, yCoord);
        const allEnemyShipDown = computer.ship.checkAllSunkShip();
        const allPlayerShipDown = player.ship.checkAllSunkShip();
        if (canBeAttacked === true) {
          e.target.classList.add("hit");
          e.target.classList.remove("hide-ship");
          game.computerAttack();
        } else if (canBeAttacked === "Miss") {
          e.target.classList.add("miss");
          game.computerAttack();
        }

        if (allEnemyShipDown) {
          enemyBoard.style.opacity = 0.5;
          enemyBoard.style.pointerEvents = "none";
        }
        if (allPlayerShipDown) {
          enemyBoard.style.opacity = 0.5;
          enemyBoard.style.pointerEvents = "none";
        }
      }
    });

    startBtn.addEventListener("click", () => {
      const shipCount = player.ship.getAllShips().length;
      if (shipCount >= 17) {
        optionsMenu.classList.add("hide-options");
        enemyBoard.classList.remove("hide-board");
        playerBoard.classList.add("game-start");
        computer.ship.autoPlaceShips();
        game.createComputerShips();
      }
    });
  };

  return { dragHandler, clickHandler };
})();

export default eventHandler;
