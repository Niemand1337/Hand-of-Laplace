import { Card } from "../Cards/card";

/**
 * A playable combination with its cards and its base stats
 */
export class Combination {
    cards: Card[]; // Which cards are used for the combination
    damage: number; // The base damage of the combination
    name: string; // What type of combination it is, for example "Duo" or "Single"

    constructor(cards: Card[], damage: number, name: string) {
        this.cards = cards;
        this.damage = damage;
        this.name = name;
    }
}