import { Deck } from "./Cards/deck"
import { Skilltree } from "./Character/skilltree"
import { Stats } from "./Character/stats"

export interface Player {
    skilltree: Skilltree; // How the player used his level
    stats: Stats; // The values of the player, like health and hand size
    deck: Deck; // The cards of the player
}