import { Card } from "../../Cards/card";
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
     */
    setup(): void {

    }

    /**
     * Called when the player wants to play selected cards
     * Puts the cards from the hand to the discard pile
     * 
     * Applie 
     * @param selected - The selected cards of the player
     */
    update(selected: Card[]): void {
        
    }
}