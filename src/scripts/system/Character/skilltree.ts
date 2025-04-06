import { LevelSystem } from "./levelSystem";
import { Skill } from "./skills";

export interface Skilltree {
    type: String; // The name of the class the player uses
    level_system: LevelSystem; // The management of the player level
    skills: Skill[]; // All the skills the player selected

}