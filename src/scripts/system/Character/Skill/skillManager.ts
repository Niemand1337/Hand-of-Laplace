import { Combination } from "../../Combinations/combination";
import Skill from "./skill";
import { SkillType } from "./enums";

export class SkillManager {
    defense_skills: Skill[]; 
    utility_skills: Skill[];
    attack_skills: Skill[];
    stat_skills: Skill[];

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
            case SkillType.defense:
                skill.add(this.defense_skills);
                break;
            case SkillType.utility:
                skill.add(this.utility_skills);
                break;
            case SkillType.attack:
                skill.add(this.attack_skills);
                break;
            case SkillType.stat: // Stat, old changes will be reverted and new applied
                skill.add(this.stat_skills);
                skill.activate(); // Apply new changes
        }
    }

    apply_defense_skills(combination: Combination): Combination {
        return combination;
    }

    apply_utility_skills(combination: Combination): Combination {
        return combination;
    }

    apply_attack_skills(combination: Combination): Combination {
        return combination;
    }

    apply_all_skills(combination: Combination): Combination {
        combination = this.apply_defense_skills(combination);
        combination = this.apply_utility_skills(combination);
        combination = this.apply_attack_skills(combination);
        return combination;
    }
}