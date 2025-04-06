import { LevelNode } from "../Level/levelNode";
import { LevelSystem } from "../Level/levelSystem";
import { Skill } from "../Skill/skills";

export interface Skilltree {
    level_system: LevelSystem; // The management of the player level
    skills: Skill[]; // All the skills the player selected
    tree: LevelNode; // The node of the tree (Contains a skill and the following nodes) 
}