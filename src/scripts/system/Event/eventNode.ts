import { Encounter } from "./encounter";
import { Battle } from "./Fight/battle";

/**
 * Used to create maps
 */
export class EventNode {
    event: Battle | Encounter; // The Event of the Node, either a monster fight or an event
    ways: EventNode[]; // Possible paths one can follow

    constructor(event: Battle, ways: EventNode[] = []) {
        this.event = event;
        this.ways = ways;
    }
}