export default function Ship(shipsInfo) {
  const { size, type } = shipsInfo;
  const ship = Array.from({ length: size }, () => "");

  function getNonHitPositions() {
    return ship.filter((pos) => pos !== "hit");
  }

  function getShip() {
    return ship;
  }

  function hit(pos) {
    ship.splice(pos, 1, "hit");
  }

  function isSunk() {
    return ship.every((pos) => pos === "hit");
  }

  return { getShip, getNonHitPositions, isSunk, hit, size, type };
}
