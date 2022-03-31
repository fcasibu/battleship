import Gameboard from "../factories/Gameboard";

describe("Gameboard Factory", () => {
  let gameBoard;
  let attackFunc;

  beforeEach(() => {
    gameBoard = Gameboard();
    attackFunc = function attack(size, x, y) {
      for (let i = 0; i <= size; i++) {
        gameBoard.receiveAttack(x + i, y);
      }
    };
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
    expect(board[5][3].type).toBe("Carrier");
  });

  test("Missed hits should return Coordinates [4, 5]", () => {
    gameBoard.placeShip("Carrier", [3, 5]);
    const attack = gameBoard.receiveAttack(2, 5, 2);
    expect(attack).toBe(`Missed at x: 2 and y: 5`);
  });

  test("Test for successful hit", () => {
    gameBoard.placeShip("Carrier", [4, 5]);
    const attack = gameBoard.receiveAttack(4, 5, 2);
    expect(attack).toBe(`Position x: 4 and y: 5 has been hit`);
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
    gameBoard.placeShip("Carrier", [5, 6]);
    gameBoard.placeShip("Battleship", [3, 2]);
    gameBoard.placeShip("Cruiser", [0, 4]);
    gameBoard.placeShip("Submarine", [5, 4]);
    gameBoard.placeShip("Destroyer", [7, 9]);
    attackFunc(5, 5, 6);
    attackFunc(4, 3, 2);
    attackFunc(3, 0, 4);
    attackFunc(3, 5, 4);
    attackFunc(2, 7, 9);
    expect(gameBoard.checkAllSunkShip()).toBeTruthy();
  });

  test("Returns false if all ships are still up", () => {
    gameBoard.placeShip("Carrier", [2, 8]);
    gameBoard.placeShip("Destroyer", [6, 2]);
    gameBoard.placeShip("Submarine", [4, 0]);
    expect(gameBoard.checkAllSunkShip()).toBeFalsy();
  });

  test("Should return Position is occupied when a ship is already in place", () => {
    gameBoard.placeShip("Carrier", [2, 5]);
    expect(gameBoard.placeShip("Carrier", [4, 5])).toBe("Position is Occupied");
  });

  test("Should test edges of the board", () => {
    const carrier = "Carrier";
    const xCoord = 7;
    const xCoordNegative = -1;
    expect(gameBoard.checkBoardEdges(carrier, xCoord)).toBeTruthy();
    expect(gameBoard.checkBoardEdges(carrier, xCoordNegative)).toBeTruthy();
  });

  test("Should not be able to attack outside the board", () => {
    const beyondXCoord = gameBoard.receiveAttack(10, 6);
    const beyondYCoord = gameBoard.receiveAttack(8, 14);
    expect(beyondXCoord).toBe("Invalid coordinates");
    expect(beyondYCoord).toBe("Invalid coordinates");
  });
});
