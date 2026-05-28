import { Card } from "../../Cards/card";
import { Player } from "../../Character/Player/player";
import { Enemy } from "../../Character/Enemy/enemy";
import { Encounter } from "../encounter";

export class Battle implements Encounter {
    player: Player;
    enemy: Enemy;
    end: boolean; // True if either the player or enemy is dead

    constructor(player: Player, enemy: Enemy) {
        this.player = player;
        this.enemy = enemy;
        this.end = false;
    }

    /**
     * Initialize the encounter and starts the loop
     */
    load(): void {

    }

    /** ??
     * Ends the encounter and applies the consequences
     */
    resolve(): void {

    }

    /**
     * Creates the scene (visual) for the player
     */
    visualize(): void {

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