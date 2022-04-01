function createDivs(size, type) {
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

  createDivs(5, carrier);
  createDivs(4, battleship);
  createDivs(3, cruiser);
  createDivs(3, submarine);
  createDivs(2, destroyer);
}
