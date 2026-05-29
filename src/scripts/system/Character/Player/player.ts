import Tester1Skilltree from "../../../Structures/Skilltrees/skill_test1";
import Tester1Stats from "../../../Structures/Stats/stats_test1";
import { Card } from "../../Cards/card";
import { Deck } from "../../Cards/deck"
import Skilltree from "../Skill/skilltree"
import { Stats } from "./stats"

export class Player {
    skilltree: Skilltree; // How the player used his level in his class
    stats: Stats; // The values of the player, like health and hand size
    deck: Deck; // The cards of the player

    constructor(type: String, deck: Deck) {
        this.skilltree = this.loadSkilltree(type);
        this.stats = this.loadStats(type);
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

    /**
     * Load skilltree for the type
     */
    private loadSkilltree(type: String): Skilltree {
        if (type === "Tester1") {
            return new Tester1Skilltree();
        }
        throw new Error(`Unknown player type: ${type}`);
    }

    /**
     * Load stats for the type
     */
    private loadStats(type: String): Stats {
        if (type === "Tester1") {
            return new Tester1Stats();
        }
        throw new Error(`Unknown player type: ${type}`);
    }
} 