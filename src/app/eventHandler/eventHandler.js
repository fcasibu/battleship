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
      const selected = document.querySelector(`[selected="${true}"]`);
      let canPlace = false;
      let shipLength;
      let shipName;
      if (selected) {
        shipName = selected.dataset.type;
        shipLength = selected.childElementCount;
        canPlace = true;
      }
      if (canPlace) {
        const xCoord = e.target.dataset.x;
        e.target.classList.add("hovered");
        const yCoord = e.target.dataset.y;
        for (let i = 0; i < shipLength; i++) {
          const foo = document.querySelector(
            `.square[data-x="${xCoord - i}"][data-y="${yCoord}"]`
          );

          if (foo) {
            foo.classList.add("hovered");
          }
        }
        e.target.addEventListener("mouseout", () => {
          const hovered = document.querySelectorAll(".hovered");
          hovered.forEach((hover) => hover.classList.remove("hovered"));
        });

        e.target.addEventListener("click", () => {
          const hovered = document.querySelectorAll(".hovered");
          if (
            player.ship.placeShip(shipName, [xCoord - (shipLength - 1), yCoord])
          ) {
            hovered.forEach((hover) => hover.classList.add("placed"));
            selected.setAttribute("selected", false);
            selected.setAttribute("hidden", true);
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
        console.log(e.target);
        const xCoord = e.target.dataset.x;
        const yCoord = e.target.dataset.y;
        if (computer.ship.receiveAttack(xCoord, yCoord)) {
          e.target.classList.add("hit");
          e.target.classList.remove("hide-ship");
        } else {
          e.target.classList.add("miss");
        }
        if (computer.ship.checkAllSunkShip()) {
          enemyBoard.style.opacity = 0.5;
          enemyBoard.style.pointerEvents = "none";
        }
      }
    });
  };

  return { dragHandler, clickHandler, computer };
})();

export default eventHandler;
