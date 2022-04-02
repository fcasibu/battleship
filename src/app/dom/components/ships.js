function createShipsToDeploy(size, type) {
  for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    div.classList.add("ship-square");
    type.appendChild(div);
  }
}

export default function createShips() {
  const carrier = document.querySelector(".carrier");
  const battleship = document.querySelector(".battleship");
  const cruiser = document.querySelector(".cruiser");
  const submarine = document.querySelector(".submarine");
  const destroyer = document.querySelector(".destroyer");

  createShipsToDeploy(5, carrier);
  createShipsToDeploy(4, battleship);
  createShipsToDeploy(3, cruiser);
  createShipsToDeploy(3, submarine);
  createShipsToDeploy(2, destroyer);
}
