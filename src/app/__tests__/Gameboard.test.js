import Gameboard from "../factories/Gameboard";

describe("Gameboard Factory", () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = Gameboard();
  });

  test("Board Creation", () => {
    const boardArray = gameBoard.board;
    expect(boardArray).toEqual(
      expect.not.arrayContaining([expect.not.arrayContaining([null])])
    );
  });

  test("Ship placement for Carrier at x: 5, y:3", () => {
    gameBoard.placeShip("Carrier", [3, 5]);
    const board = gameBoard.getBoard();
    expect(board[5][3].getType()).toBe("Carrier");
  });

  test("Ship placement for Destroyer at x: 8, y:6", () => {
    gameBoard.placeShip("Destroyer", [6, 8]);
    const board = gameBoard.getBoard();
    expect(board[8][6].getType()).toBe("Destroyer");
  });

  test("Missed hits should return Coordinates [4, 5]", () => {
    gameBoard.placeShip("Carrier", [3, 5]);
    const attack = gameBoard.receiveAttack(4, 5, 2);
    expect(attack).toBe(`Missed at x:4 and y: 5`);
  });

  test("Successful hit should return Position 2 has been hit", () => {
    gameBoard.placeShip("Carrier", [4, 5]);
    const attack = gameBoard.receiveAttack(4, 5, 2);
    expect(attack).toBe(`Position 2 has been hit`);
  });

  test("Two missed hits should return two coordinates", () => {
    gameBoard.placeShip("Carrier", [2, 8]);
    gameBoard.receiveAttack(4, 5, 4);
    gameBoard.receiveAttack(6, 6, 4);
    const getMissedHits = gameBoard.getMissedHits();
    const missedArr = [
      { x: 4, y: 5 },
      { x: 6, y: 6 },
    ];
    expect(JSON.stringify(getMissedHits)).toBe(JSON.stringify(missedArr));
  });

  test("Returns true if all ships has sunk", () => {
    gameBoard.placeShip("Carrier", [2, 8]);
    gameBoard.placeShip("Destroyer", [6, 2]);
    gameBoard.placeShip("Submarine", [4, 0]);
    for (let i = 0; i <= 5; i++) {
      gameBoard.receiveAttack(2, 8, i);
      gameBoard.receiveAttack(6, 2, i);
      gameBoard.receiveAttack(4, 0, i);
    }
    expect(gameBoard.checkAllSunkShip()).toBeTruthy();
  });

  test("Returns false if all ships are still up", () => {
    gameBoard.placeShip("Carrier", [2, 8]);
    gameBoard.placeShip("Destroyer", [6, 2]);
    gameBoard.placeShip("Submarine", [4, 0]);
    expect(gameBoard.checkAllSunkShip()).toBeFalsy();
  });
});
