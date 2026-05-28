import { Player } from "../Character/Player/player"
import { EventNode } from "./eventNode"

export default abstract class Map {
    player: Player;
    root: EventNode;

    constructor(player: Player, root: EventNode) {
        this.player = player;
        this.root = root;
    }

    /**
     * Player chooses the next event to go to.
     * Updates the root with one of the ways of the current root.
     */
    choose(): void {
        
    }

    /**
     * Creates the visual representation of the map for the player.
     */
    visualize(): void {

    }

    /**
     * Loads the map and starts the game. 
     */
    load(): void {
        this.visualize();
        this.root.event.load(this.player);
        this.choose()

        if (this.root) {
            this.load();
        }
    }
}