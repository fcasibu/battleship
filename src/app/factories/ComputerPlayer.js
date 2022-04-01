import Player from "./Players";
import helpers from "../helpers/helpers";

export default class Computer extends Player {
  constructor(name = helpers().getRandomName()) {
    super(name);
  }
}
