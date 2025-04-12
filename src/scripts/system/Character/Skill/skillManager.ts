import { Combination } from "../../Combinations/combination";
import { Skill } from "./skills";

export class SkillManager {
    defense_skills: Skill[]; // Skills that activate while taking damage
    utility_skills: Skill[]; // Skills that activate after the battle
    attack_skills: Skill[]; // Skills that activate while attacking
    stat_skills: Skill[]; // Skills that change the stats

    constructor() {
        this.defense_skills = []; // SkillType === 0
        this.utility_skills = []; // SkillType === 1
        this.attack_skills = []; // SkillType === 2
        this.stat_skills = []; // SkillType === 3
    }

    /**
     * Adds a skill to the player skills
     * Considers basic, stacking, scaling and evolving skills 
     * @param skill - The new skill
     */
    add_skill(skill: Skill): void {
        if (skill.skillType === 0) { // Basic skills
            return;
        }

        if (skill.skillType === 1) { // Stacking skills
            return;
        }

        if (skill.skillType === 2) { // Scaling skills

        }

        // Evolving skills

    }

    apply_all_skills(combination: Combination): Combination {
        return combination;
    }
}