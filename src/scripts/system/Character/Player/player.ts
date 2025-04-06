import { Card } from "../../Cards/card";
import { Deck } from "../../Cards/deck"
import { Skilltree } from "../Skill/skilltree"
import { Stats } from "./stats"

export class Player {
    type: String; // The name of the class the player uses
    skilltree: Skilltree; // How the player used his level
    stats: Stats; // The values of the player, like health and hand size
    deck: Deck; // The cards of the player

    constructor(type: String, skilltree: Skilltree, stats: Stats, deck: Deck) {
        this.type = type;
        this.skilltree = skilltree;
        this.stats = stats;
        this.deck= deck;
    }

    /**
     * Get method for the hand
     * @returns - The hand of the player
     */
    getHand(): Card[] {
        return this.deck.hand
    }

    /**
     * Uses the cards from the hand
     * @param selected - The cards that will be played
     */
    playCards(selected: Card[]): void {
        this.deck.play_from_hand(selected)
    }

    /**
     * Draws missing cards from the draw_pile into the hand
     */
    draw(): void {
        this.deck.draw_from_draw_pile(this.stats.handsize - this.deck.hand.length)
    }
}