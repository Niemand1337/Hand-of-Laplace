import { Player } from "../../Character/Player/player";
import { Enemy } from "../../Enemy/enemy";

export class Battle {
    player: Player;
    enemy: Enemy;
    end: boolean; // True if either the player or enemy is dead

    constructor(player: Player, enemy: Enemy) {
        this.player = player;
        this.enemy = enemy;
        this.end = false;
    }

    /**
     * Creates the scene for the player
     * Adds the visuals to the window, so the battle can be fought
     */
    setup(): void {
        // TODO
    }

    update(): void {

    }
}