import { Enemy } from "../enemy";

export default class Goblin extends Enemy {
    constructor() {
        super("Goblin", 420, 3, 10, [], 10, 5);
    }
}