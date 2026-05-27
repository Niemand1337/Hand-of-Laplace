import Skill from "../skill";

// Skills that scale, choosing it multiple times increases the level of it
export default abstract class ScalingSkill extends Skill {
    skillClass: number = 2; // ScalingSkills are class 2
    level: number;

    constructor(skillType: number, value: number, level: number = 1) {
        super(skillType, value);
        this.level = level;
    }

    add(skills: Skill[]): void {
        for (let skill of skills) {
            if (skill.name === this.name) { // Skill already exist, increase the level of it
                skill.revert(); // Revert the changes of the old skill before changing it
                (skill as ScalingSkill).level++;
                return;
            }
        }
        skills.push(this); // Skill dosn't exist, add it
    }
}