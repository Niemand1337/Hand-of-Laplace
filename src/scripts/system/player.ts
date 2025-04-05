import { Deck } from "./Cards/deck"
import { Skilltree } from "./Level/skilltree"

export interface Player {
    skilltree: Skilltree, // How the player used his level
    deck: Deck // The Cards of the player
}