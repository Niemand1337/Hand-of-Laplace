import { Card } from "../../../Cards/card";

export interface Combination {
    cards: Card[]; // Which cards are used for the combination
    damage: number; // The base damage of the combination
    name: string; // What type of combination it is, for example "Duo" or "Single"
}