import MapTest1 from "./Scripts/Structures/Maps/map_test1";
import { Deck } from "./Scripts/System/Cards/deck";
import { Player } from "./Scripts/System/Character/Player/player";

console.log("Start Program...");

const player: Player = new Player("Tester", new Deck());
console.log("Created Player:", player);

const map: MapTest1 = new MapTest1(player);
console.log("Created Map:", map);

map.load();