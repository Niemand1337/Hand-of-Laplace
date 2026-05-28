import { SkillManager } from "../Skill/skillManager";

export abstract class Enemy {
    name: String; // Display name
    current_health: number // Dead if 0
    maximal_health: number // current_health can't be higher
    damage: number // On hit damage
    current_speed: number // Counts down, attacks on 0 and resets to maximal_speed
    maximal_speed: number // Start value of current_speed
    skill_manager: SkillManager[]; // Skills the enemy has. Example: Halfes the damage of each second attack
    gold: number; // How much gold the player recieves for the victory
    xp: number; // How much xp the player recieves for the victory

    constructor(name: String, maximal_health: number, damage: number, maximal_speed: number, skill_manager: SkillManager[], gold: number, xp: number) {
        this.name = name;
        this.maximal_health = maximal_health;
        this.current_health = maximal_health;
        this.damage = damage;
        this.maximal_speed = maximal_speed;
        this.current_speed = maximal_speed;
        this.skill_manager = skill_manager;
        this.gold = gold;
        this.xp = xp;
    }
}