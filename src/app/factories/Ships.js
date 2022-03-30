export default function Ship(SHIP_INFO) {
  const { size, type } = SHIP_INFO;
  const ship = Array.from({ length: size }, () => null);

  function getLength() {
    return size;
  }

  function getShip() {
    return ship;
  }

  function getType() {
    return type;
  }

  function hit(pos) {
    if (pos > size) return "No ship was hit";
    if (ship[pos - 1] === "hit") return `Position ${pos} has already been hit`;
    ship.splice(pos - 1, 1, "hit");
    return `Position ${pos} has been hit`;
  }

  function isSunk() {
    return ship.every((pos) => pos === "hit");
  }

  return { getLength, getShip, getType, isSunk, hit };
}
