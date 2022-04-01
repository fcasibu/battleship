import Gameboard from "./Gameboard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.ship = Gameboard();
  }
}
