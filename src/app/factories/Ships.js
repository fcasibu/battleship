export default function Ship(SHIP_INFO) {
  const { size, type } = SHIP_INFO;
  const ship = Array.from({ length: size }, () => null);

  function getLength() {
    return size;
  }

  function getNonHitPositions() {
    return ship.filter((pos) => pos !== "hit");
  }

  function getShip() {
    return ship;
  }

  function getType() {
    return type;
  }

  function hit(pos) {
    ship.splice(pos, 1, "hit");
  }

  function isSunk() {
    return ship.every((pos) => pos === "hit");
  }

  return { getLength, getShip, getType, getNonHitPositions, isSunk, hit };
}
