import { Card } from "./card";

/**
 * Provides different sort and filter functions for lists of cards
 * Values: Ascending order
 * Suits: Hearths, Diamonds, Spades, Clubs
 */
export default class CardListManager {
    /**
     * Sort the cards by the values
     * At same value by suits
     * @param cards - The cards to be sorted
     * @returns - The given cards, but ordered acending
     */
    sort_by_values(cards: Card[]): Card[] {
        return cards.sort((a, b) => {
            if (a.value !== b.value) {
                return a.value - b.value; // Sort by value in ascending order
            }
            return a.suit - b.suit; // If values are the same, sort by suit in ascending order
        });
    }

    /**
     * Sort the cards by the suits
     * At same suit by values
     * @param cards - The cards to be sorted
     * @returns - The given cards, but ordered acending
     */
    sort_by_suit(cards: Card[]): Card[] {
        return cards.sort((a, b) => {
            if (a.suit !== b.suit) {
                return a.suit - b.suit; // Sort by suits in ascending order
            }
            return a.value - b.value; // If suits are the same, sort by value in ascending order
        });
    }

    /**
     * Returns all cards of the list with the suit
     * @param cards - The cards to be filtered
     * @param suit - The allowed suit
     * @returns - Only the cards with the suit
     */
    filter_by_suit(cards: Card[], suit: number): Card[] {
        let filtered: Card[] = [];
        cards.forEach(v => {
            if (v.suit === suit) {
                filtered.push(v);
            }
        });
        return filtered;
    }
}