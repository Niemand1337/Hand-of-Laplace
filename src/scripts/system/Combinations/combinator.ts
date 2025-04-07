import { Card } from "../Cards/card";
import { Combination } from "./combination";

export default class Combinator {
    constructor() {

    }
    
    /**
     * Returns the biggest combination of cards of the given set
     * @param cards - The crads the combination should be found in
     * @returns - The biggest combination of the cards
     */
    find_combination(cards: Card[]): Combination {
        // TODO
        return new Combination([], 0, "Peter");
    }
}