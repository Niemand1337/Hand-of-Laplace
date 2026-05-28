import { Player } from "../Character/Player/player";

export interface Encounter {
    load: (player: Player) => void;
}