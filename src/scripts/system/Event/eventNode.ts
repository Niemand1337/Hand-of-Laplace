import { Encounter } from "./encounter";

/**
 * Used to create maps
 */
export class EventNode {
    event: Encounter; // The Event of the Node, either a monster fight or an event
    ways: EventNode[]; // Possible paths one can follow

    constructor(event: Encounter, ways: EventNode[] = []) {
        this.event = event;
        this.ways = ways;
    }
}