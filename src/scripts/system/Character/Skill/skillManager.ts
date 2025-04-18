import { Combination } from "../../Combinations/combination";
import { Skill } from "./skills";

export class SkillManager {
    defense_skills: Skill[]; // 0 - Skills that activate while taking damage
    utility_skills: Skill[]; // 1 - Skills that activate after the battle
    attack_skills: Skill[]; // 2 - Skills that activate while attacking
    stat_skills: Skill[]; // 3 - Skills that change the stats

    constructor() {
        this.defense_skills = [];
        this.utility_skills = [];
        this.attack_skills = [];
        this.stat_skills = [];
    }

    /**
     * Adds a skill to the player skills
     * Considers basic, stacking, scaling and evolving skills 
     * @param skill - The new skill
     */
    add_skill(skill: Skill): void {
        switch(skill.skillType) {
            case 0: // Defense
                skill.add(this.defense_skills);
                break;
            case 1: // Utility
                skill.add(this.utility_skills);
                break;
            case 2: // Attack
                skill.add(this.attack_skills);
                break;
            case 3: // Stat
                skill.add(this.stat_skills);
        }
    }

    apply_all_skills(combination: Combination): Combination {
        return combination;
    }
}