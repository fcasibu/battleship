import Ships from "../factories/Ships";

describe("Ship Factory", () => {
  let ship;

  beforeEach(() => {
    ship = Ships({ type: "Carrier", size: 5 });
  });

  test("Should return a length of 5", () => {
    expect(ship.getLength()).toBe(5);
  });

  test("Should return false if ship has not sunk", () => {
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBeFalsy();
  });

  test("Should return the position if same position was hit twice", () => {
    ship.hit(1);
    expect(ship.hit(1)).toBe("Position 1 has already been hit");
  });

  test("Carrier ship should have one 'hit' after a successful hit", () => {
    ship.hit(3);
    const isShipHit = ship.getShip().some((el) => el === "hit");
    expect(isShipHit).toBeTruthy();
  });

  test("Should return no ship was hit after a failed hit", () => {
    expect(ship.hit(6)).toBe("No ship was hit");
  });

  test("Should return true if ship has sunk", () => {
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    ship.hit(4);
    ship.hit(5);
    expect(ship.isSunk()).toBeTruthy();
  });
});
