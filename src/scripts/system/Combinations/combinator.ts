import { Card } from "../Cards/card";
import CardListManager from "../Cards/cardListManager";
import { Combination } from "./combination";

/**
 * Finds combinations in Card[]
 * The player always plays the one with the highest base damage
 * To find the highest base combination use find_combination
 * 
 * Combinations in priority order:
 * 
 * Kingdom     : 5 : 1500 : Same suit 10, 11, 12, 13, 14
 * Army        : 5 :  500 : Same suit and 5 in sequenz
 * Freaks      : 4 :  400 : 4 * 14                       : ?
 * Kings Fools : 5 :  350 : 1 * 13 and 4 * 14            : ?
 * Royalty     : 5 :  300 : (2|3) * 12 and (3|2) * 13    : ?
 * Round table : 5 :  250 : 3 * 11, 12 and 13            : ?
 * Soldiers    : 5 :  150 : 3 * x and 2 * y
 * League      : 5 :  125 : Same suit
 * Quartett    : 4 :  375 : 4 * x
 * Ruler       : 3 :  100 : 3 * 13
 * Tripple     : 3 :   80 : 3 * x
 * Couple      : 2 :   25 : 12 and 13                    : ?
 * Duo         : 2 :   20 : 2 * x
 * Fool        : 1 :    3 : 1 * 14                       : ?
 * Hero        : 1 :   15 : 1 * 11                       : ?
 * Single      : 1 :   10 : 1 * x
 */
export default class Combinator {
    cardListManager: CardListManager;

    constructor() {
        this.cardListManager = new CardListManager();
    }

    /**
     * Returns the biggest combination of cards of the given set
     * @param cards - The cards the combination should be found in
     * @returns - The biggest combination of the cards
     */
    find_combination(cards: Card[]): Combination {
        cards = this.cardListManager.sort_by_values(cards);

        let comb: Combination | null = this.kingdom(cards);
        if (comb !== null) {
            return comb;
        }

        return new Combination(cards, 0, "Void");
    }

    kingdom(cards: Card[]): Combination | null {
        if (this.cardListManager.all_same_suit(cards) && this.cardListManager.longest_sequenz(cards) === 5) {
            return new Combination(cards, 1500, "Kingdom");
        }
        return null;        
    }
}