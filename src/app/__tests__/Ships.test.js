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

  test("Should return true if ship has sunk", () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    ship.hit(4);
    expect(ship.isSunk()).toBeTruthy();
  });
});
