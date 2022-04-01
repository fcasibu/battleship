import Player from "../factories/Players";
import Computer from "../factories/ComputerPlayer";

const eventHandler = (() => {
  const player = new Player("nevz");
  const computer = new Computer();
  const shipsContainer = document.querySelector(".ships-container");
  const boardContainer = document.querySelector(".player-board > .game-board");
  const enemyBoard = document.querySelector(".enemy-board > .game-board");
  const dragHandler = () => {
    boardContainer.addEventListener("mouseover", (e) => {
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
        e.target.classList.add("hovered");
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
        const allShipDown = computer.ship.checkAllSunkShip();
        if (canBeAttacked) {
          e.target.classList.add("hit");
          e.target.classList.remove("hide-ship");
        } else {
          e.target.classList.add("miss");
        }

        if (allShipDown) {
          enemyBoard.style.opacity = 0.5;
          enemyBoard.style.pointerEvents = "none";
        }
      }
    });
  };

  return { dragHandler, clickHandler, computer };
})();

export default eventHandler;
