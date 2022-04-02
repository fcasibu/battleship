import renderBoard from "./components/render";

const dom = (() => {
  renderBoard();
  const optionsMenu = document.querySelector(".options");
  const shipsContainer = document.querySelector(".ships-container");
  const playerBoard = document.querySelector(".player-board > .game-board");
  const enemyBoard = document.querySelector(".enemy-board > .game-board");
  const buttonsContainer = document.querySelector(".buttons");
  const playersShips = document.querySelectorAll(".ships");
  playersShips.forEach((player) => player.classList.add("hide-options"));

  function removeShipsToDeploy() {
    const shipsToDeploy = document.querySelectorAll('[selected="false"');
    shipsToDeploy.forEach((ship) => ship.setAttribute("hidden", true));
  }

  function removeOccupied() {
    const occupiedPositions = document.querySelectorAll(".occupied");

    occupiedPositions.forEach((position) =>
      position.classList.remove("occupied")
    );
  }

  function addOccupied() {
    const hoveredElements = document.querySelectorAll(".hovered");
    hoveredElements.forEach((element) => element.classList.add("occupied"));
  }

  function removeHoveredElements() {
    const hoveredElements = document.querySelectorAll(".hovered");
    hoveredElements.forEach((element) => element.classList.remove("hovered"));
  }

  function startGame() {
    optionsMenu.classList.add("hide-options");
    enemyBoard.classList.remove("hide-board");
    playerBoard.classList.add("game-start");
    playersShips.forEach((player) => player.classList.remove("hide-options"));
  }

  function endGame() {
    enemyBoard.style.opacity = 0.5;
    enemyBoard.style.pointerEvents = "none";
  }

  function hoverOnBoard(shipLength, xCoord, yCoord) {
    for (let i = 0; i < shipLength; i++) {
      const square = document.querySelector(
        `[data-x="${xCoord - i}"][data-y="${yCoord}"]`
      );

      if (square && !square.classList.contains("occupied")) {
        square.classList.add("hovered");
      }
    }
  }

  return {
    shipsContainer,
    buttonsContainer,
    playerBoard,
    enemyBoard,
    playersShips,
    removeShipsToDeploy,
    removeOccupied,
    removeHoveredElements,
    addOccupied,
    startGame,
    endGame,
    hoverOnBoard,
  };
})();

export default dom;
