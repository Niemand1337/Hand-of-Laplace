import { Enemy } from "../../System/Character/Enemy/enemy";
import Goblin from "../../System/Character/Enemy/Mob/goblin";
import { Player } from "../../System/Character/Player/player";
import { EventNode } from "../../System/Event/eventNode";
import { Battle } from "../../System/Event/Fight/battle";
import Map from "../../System/Event/map";

export default class MapTest1 extends Map {
    constructor(player: Player) {
        const battle_with = (enemy: Enemy): Battle => {
            return new Battle(player, enemy);
        };

        /**
         * Goblin -> Goblin -> Goblin
         */
        const root: EventNode = new EventNode(battle_with(new Goblin()),
            [
                new EventNode(battle_with(new Goblin()),
                    [
                        new EventNode(battle_with(new Goblin())
                        )
                    ]
                )
            ]
        );
        super(player, root);
    }
}