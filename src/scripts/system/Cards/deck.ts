import { shuffle_array } from "../../utility";
import { Card } from "./card"

export class Deck {
    draw_pile: Card[]; // Cards get drawn from here. If empty mix the discard pile into it
    discard_pile: Card[]; // Pile of used cards
    hand: Card[]; // The cards the player can use

    constructor(draw_pile: Card[] = this.createDefaultDeck(), discard_pile: Card[] = []) {
        this.draw_pile = shuffle_array(draw_pile); // The start deck of the player
        this.discard_pile = shuffle_array(discard_pile); // Default is a empty discard pile, but may be changed by effects
        this.hand = []; // Hand is always empty at the begin
    }

    /**
     * Removes the given cards from the hand and puts them into the discard_pile
     * @param cards - The Cards that should be played from the hand
     */
    play_from_hand(cards: Card[]): void {
        this.discard_pile = [...this.discard_pile, ...cards]; // Combines the played cards with the discard_pile
        cards.forEach(card => {
            this.hand.splice(this.hand.indexOf(card), 1); // Removes card from hand
        })
    }

    /**
     * Removes x cards from the draw_pile and adds them to the hand 
     * @param x The number of cards that should be drawn from the draw_pile
     */
    draw_from_draw_pile(x: number): void {
        for (let i = 0; i < x; i++) {
            if (this.draw_pile.length) { // If draw_pile is not empty
                this.hand.push(this.draw_pile.pop() as Card); // Removes last card from the draw_pile and pushes it into the hand
                continue;
            }
            this.discard_into_draw();
            i--; // No card was added
        }
    }

    /**
     * Mixes all cards from the discard pile into the draw pile and shuffles it
     */
    discard_into_draw(): void {
        this.draw_pile = shuffle_array([...this.draw_pile, ...this.discard_pile]); // Combines draw and discard pile and shuffles afterwards
        this.discard_pile = []; // All cards from the discard pile are now in the draw pile
    }

    /**
     * Creates a default deck
     * TODO: Create normal deck
     */
    private createDefaultDeck(): Card[] {
        return [
            new Card(1, 1, "Hearth1"),
            new Card(2, 1, "Hearth2"),
            new Card(3, 1, "Hearth3"),
        ];
    }
}