import { LevelNode } from "../Level/levelNode";
import { LevelSystem } from "../Level/levelSystem";
import { SkillManager } from "./skillManager";

export default abstract class Skilltree {
    level_system: LevelSystem; // The management of the player level
    skills: SkillManager; // All the skills the player selected
    tree: LevelNode; // The node of the tree (Contains a skill and the following nodes)
    type: String; // The class of the player, like "Mage"

    constructor(type: String, tree: LevelNode) {
        this.level_system = new LevelSystem();
        this.skills = new SkillManager();
        this.type = type;
        this.tree = tree;
        
    }
}