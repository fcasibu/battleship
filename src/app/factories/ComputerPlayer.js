import Player from "./Players";
import helpers from "../helpers/helpers";

export default class Computer extends Player {
  constructor(name = helpers().getRandomName()) {
    super(name);
    this.attackArray = [];
  }

  randomAttack(opponent) {
    const xCoord = Math.floor(Math.random() * 10);
    const yCoord = Math.floor(Math.random() * 10);
    const isSameCoord = this.attackArray.some(
      (hits) => hits.xCoord === xCoord && hits.yCoord === yCoord
    );
    if (isSameCoord) {
      return this.randomAttack(opponent);
    }
    opponent.receiveAttack(xCoord, yCoord);
    this.attackArray.push({ xCoord, yCoord });

    return { xCoord, yCoord };
  }
}
