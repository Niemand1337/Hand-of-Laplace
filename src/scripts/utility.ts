import { Card } from "./system/Cards/card";

/**
 * Shuffels the given array around and returns it
 * Implementation of the Fisher-Yates-Algorithmus
 * @param array - The array that will be shuffeld
 * @returns - The array with elements in randomised order
 */
export function shuffle_array<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}