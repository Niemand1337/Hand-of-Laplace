import { Deck } from "../../Cards/deck"
import { Skilltree } from "../Skill/skilltree"
import { Stats } from "./stats"

export interface Player {
    type: String; // The name of the class the player uses
    skilltree: Skilltree; // How the player used his level
    stats: Stats; // The values of the player, like health and hand size
    deck: Deck; // The cards of the player
}