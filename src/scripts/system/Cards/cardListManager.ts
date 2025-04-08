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
     * Returns all cards of the list with the value
     * @param cards - The cards to be filtered
     * @param suit - The allowed value
     * @returns - Only the cards with the value
     */
    filter_by_value(cards: Card[], value: number): Card[] {
        let filtered: Card[] = [];
        cards.forEach(v => {
            if (v.value === value) {
                filtered.push(v);
            }
        });
        return filtered;
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

    /**
     * Returns if all cards have the same suit
     * @param cards - The Card[] to control
     * @returns - Boolean, if all cards have the same suit
     */
    all_same_suit(cards: Card[]): boolean {
        if (cards.length < 2) {
            return true;
        }
        return cards.length === this.filter_by_suit(cards, cards[0].suit).length;
    }

    /**
     * Returns the length of the longest sequenz in the cards
     * @param cards - The cards the sequenz should be searched in
     * @param ordered - If the cards are already ordered by value
     * @returns - Length of longest sequenz
     */
    longest_sequenz(cards: Card[], ordered: boolean = true): number {
        if (cards.length == 0) { // No sequent possible
            return 0;
        }
        if (!ordered) { // Don't need to order again
            cards = this.sort_by_values(cards);
        }

        let length: number = 1;
        let current_length: number = 1;
        let current_value: number = cards[0].value
        cards.splice(1).forEach(card => {
            if (card.value === current_value + 1) { // In sequenz
                current_length++;
                if (current_length > length) {
                    length = current_length;
                }
            } else { // Sequenz restart
                current_length = 1;
            }
            current_value = card.value;
        });
        return length;
    }
}