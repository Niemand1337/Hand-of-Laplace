import { Card } from "../Cards/card";
import CardListManager from "../Cards/cardListManager";
import { Combination } from "./combination";

/**
 * Finds combinations in Card[]
 * No function is designed for Card[] with length > 5
 * The player always plays the one with the highest base damage
 * To find the highest base combination use find_combination
 * Does not consider playerskills, for example a buff to balck cards does not mean, they will be prefered
 * 
 * Combinations in priority order (mostly damage, but Fool):
 * 
 * Quintet     : 5 : 2000 : 5 * x
 * Kingdom     : 5 : 1500 : Same suit 10, 11, 12, 13, 14
 * Army        : 5 :  500 : Same suit and 5 in sequenz
 * Freaks      : 4 :  400 : 4 * 14                       : ? x
 * Quartet     : 4 :  375 : 4 * x
 * Kings Fools : 5 :  350 : 1 * 13 and 4 * 14            : ? x
 * Royalty     : 5 :  300 : (2|3) * 12 and (3|2) * 13    : ? x
 * Round table : 5 :  250 : 3 * 11, 12 and 13            : ? x
 * Soldiers    : 5 :  150 : 3 * x and 2 * y
 * League      : 5 :  125 : Same suit
 * Ruler       : 3 :  100 : 3 * 13
 * Tripple     : 3 :   80 : 3 * x
 * Couple      : 2 :   25 : 12 and 13                    : ?
 * Duo         : 2 :   20 : 2 * x
 * Fool        : 1 :    2 : 1 * 14                       : ?
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
     * @param cards - Card[] with length < 6. The cards the combination should be found in
     * @returns - The biggest combination of the cards
     */
    find_combination(cards: Card[]): Combination {
        cards = this.cardListManager.sort_by_values(cards);

        // Must in priority order
        let combinations: ((card: Card[]) => null | Combination)[] = [this.quintet, this.kingdom, this.army, this.quartet, this.soldiers, this.league, this.ruler, this.tripple, this.couple, this.duo, this.fool, this.hero, this.single];

        for (const comb of combinations) { // Tries combinations in order untill the first not null one is found
            const result = comb(cards);
            if (result !== null) {
                return result;
            }
        }
        return new Combination(cards, 0, "Void"); // Error, should only be possible on cards === []
    }

    /**
     * Returns null or the quintet combination of the cards
     * @param cards
     * @returns - null or combination
     */
    quintet(cards: Card[]): Combination | null {
        if (cards.length !== 5) { // 5 cards
            return null;
        }

        if (!this.cardListManager.all_same_value(cards)) { // All same value
            return null;
        }
        return new Combination(cards, 2000, "Quintet");
    }

    /**
     * Returns null or the kingdom combination of the cards
     * Cards need to be sorted by value
     * @param cards
     * @returns - null or combination
     */
    kingdom(cards: Card[]): Combination | null {
        if (cards[0].value !== 10) { // Start sequenze at value 10
            return null;
        }

        if (this.army(cards) === null) { // Must be an army
            return null;
        }
        return new Combination(cards, 1500, "Kingdom")
    }

    /**
     * Returns null or the army combination of the cards
     * Cards need to be sorted by value
     * @param cards
     * @returns - null or combination
     */
    army(cards: Card[]): Combination | null {
        if (this.league(cards) === null) { // Same suit and 5 cards
            return null;
        }

        if (this.cardListManager.longest_sequenz(cards).length !== 5) { // 5er Sequenz
            return null;
        }
        return new Combination(cards, 500, "Army");
    }

    /**
     * Returns null or the quintet combination of the cards
     * Cards need to be sorted by value
     * @param cards
     * @returns - null or combination
     */
    quartet(cards: Card[]): Combination | null {
        if (cards.length < 4) { // At least 4 cards
            return null;
        }

        if (this.cardListManager.all_same_value(cards.slice(0, 4))) { // First 4 cards are a quartet
            return new Combination(cards.slice(0, 4), 375, "Quartet");
        }
        if (this.cardListManager.all_same_value(cards.slice(1))) { // Last 4 cards are a quartet
            return new Combination(cards.slice(1), 375, "Quartet");
        }
        return null;
    }

    /**
     * Returns null or the soldiers combination of the cards
     * 
     * @param cards
     * @returns - null or combination
     */
    soldiers(cards: Card[]): Combination | null {
        if (cards.length !== 5) {
            return null;
        }

        if (!(this.cardListManager.all_same_value(cards.splice(0, 2)) && this.cardListManager.all_same_value(cards.splice(3, 2)))) { // Two duos
            return null;
        }
        if (!this.cardListManager.all_same_value(cards.splice(1, 2)) && !this.cardListManager.all_same_value(cards.splice(2, 2))) { // One duo is a tripple
            return null;
        }
        return new Combination(cards, 150, "Soldiers")
    }

    /**
     * Returns null or the league combination of the cards
     * @param cards
     * @returns - null or combination
     */
    league(cards: Card[]): Combination | null {
        if (cards.length !== 5) { // 5 cards
            return null;
        }

        if (!this.cardListManager.all_same_suit(cards)) { // All same suit
            return null;
        }
        return new Combination(cards, 125, "League");
    }

    /**
     * Returns null or the ruler combination of the cards
     * @param cards
     * @returns - null or combination
     */
    ruler(cards: Card[]): Combination | null {
        if (this.cardListManager.filter_by_value(cards, 13).length === 3) {
            return new Combination(this.cardListManager.filter_by_value(cards, 13), 100, "Ruler");
        }
        return null;
    }

    /**
     * Returns null or the tripple combination of the cards
     * Cards need to be sorted by value
     * @param cards
     * @returns - null or combination
     */
    tripple(cards: Card[]): Combination | null {
        if (cards.length < 3) {
            return null;
        }
        
        if (this.cardListManager.all_same_value(cards.slice(0, 3))) { // First to third same value
            return new Combination(cards.splice(0, 3), 80, "Tripple");
        }
        if (cards.length === 3) { // No further options
            return null;
        }

        if (this.cardListManager.all_same_value(cards.slice(1, 3))) { // Second to fourth with same value
            return new Combination(cards.splice(1, 3), 80, "Tripple");
        }
        if (cards.length === 4) { // No further options
            return null;
        }

        if (this.cardListManager.all_same_value(cards.slice(2, 3))) { // Third to fifth with same value
            return new Combination(cards.splice(2), 80, "Tripple");
        }
        return null;
    }

    /**
     * Returns null or the couple combination of the cards
     * @param cards
     * @returns - null or combination
     */
    couple(cards: Card[]): Combination | null {
        let king = this.cardListManager.filter_by_value(cards, 13);
        if (king.length === 0) {
            return null;
        }

        let queen = this.cardListManager.filter_by_value(cards, 12);
        if (queen.length === 0) {
            return null;
        }
        return new Combination([queen[0], king[0]], 25, "Couple");
    }

    /**
     * Returns null or the couple combination of the cards
     * Cards need to be sorted by value
     * @param cards
     * @returns - null or combination
     */
    duo(cards: Card[]): Combination | null {
        for (let i = cards.length - 1; i > 0; i++) { // Reverse, want to return the highest value duo
            if (cards[i-1].value === cards[i].value) {
                return new Combination([cards[i-1], cards[i]], 20, "Duo");
            }
        }
        return null;
    }

    /**
     * Returns null or the couple combination of the cards
     * @param cards
     * @returns - null or combination
     */
    fool(cards: Card[]): Combination | null {
        const joker: Card[] = this.cardListManager.filter_by_value(cards, 14);
        if (joker.length === 0) {
            return null;
        }
        return new Combination([joker[0]], 2, "Fool");
    }

    /**
     * Returns null or the couple combination of the cards
     * @param cards
     * @returns - null or combination
     */
    hero(cards: Card[]): Combination | null {
        const knight: Card[] = this.cardListManager.filter_by_value(cards, 11);
        if (knight.length === 0) {
            return null;
        }
        return new Combination([knight[0]], 15, "Hero");
    }

    /**
     * Returns null or the couple combination of the cards
     * Cards need to be sorted by value
     * @param cards
     * @returns - null or combination
     */
    single(cards: Card[]): Combination | null {
        if (cards.length === 0) {
            return null;
        }
        return new Combination([cards[cards.length - 1]], 2, "Fool") // Last element for highest value
    }
}