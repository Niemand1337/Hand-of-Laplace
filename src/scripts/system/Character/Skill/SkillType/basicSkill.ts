import Skill from "../skill";

// Most basic types of skills, there values and effects don't change and they are unique
export default abstract class BasicSkill extends Skill {
    skillClass: number = 0; // StackingSkills are class 0

    constructor(skillType: number, value: number) {
        super(skillType, value);
    }

    add(skills: Skill[]): void {
        for (let skill of skills) {
            if (skill.name === this.name) { // Skill already exist, don't change it
                return;
            }
        }
        skills.push(this); // Skill dosn't exist, add it
    }
}