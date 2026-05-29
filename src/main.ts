import MapTest1 from "./scripts/structures/Maps/map_test1";
import { Deck } from "./scripts/system/Cards/deck";
import { Player } from "./scripts/system/Character/Player/player";

console.log("Start Program...");

const player: Player = new Player("Tester", new Deck());
console.log("Created Player:", player);

const map: MapTest1 = new MapTest1(player);
console.log("Created Map:", map);

map.load();