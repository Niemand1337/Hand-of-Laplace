import { Skill } from "../skills";

// Skills that scale, choosing it multiple times increases the level of it
export default abstract class ScalingSkill extends Skill {
    skillClass: number = 2; // ScalingSkills are class 2
    level: number;

    constructor(skillType: number, name: String, value: number, level: number = 1) {
        super(skillType, name, value);
        this.level = level;
    }

    add(skills: Skill[]): void {
        for (let skill of skills) {
            if (skill.name === this.name) { // Skill already exist, increase the level of it
                (skill as ScalingSkill).level++;
                return;
            }
        }
        skills.push(this); // Skill dosn't exist, add it
    }
}