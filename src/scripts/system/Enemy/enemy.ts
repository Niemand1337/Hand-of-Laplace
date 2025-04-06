import { Ability } from "./ability";

export interface Enemy {
    name: String; // Display name
    current_health: number // Dead if 0
    maximal_health: number // current_health can't be higher
    damage: number // On hit damage
    current_speed: number // Counts down, attacks on 0 and resets to maximal_speed
    maximal_speed: number // Start value of current_speed
    abilitys: Ability[]; // Abilities the enemy has (example, half damage each second attack)
}