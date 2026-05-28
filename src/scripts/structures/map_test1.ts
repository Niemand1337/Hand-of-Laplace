import { Enemy } from "../system/Character/Enemy/enemy";
import Goblin from "../system/Character/Enemy/Mob/goblin";
import { Player } from "../system/Character/Player/player";
import { EventNode } from "../system/Event/eventNode";
import { Battle } from "../system/Event/Fight/battle";
import Map from "../system/Event/map";

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