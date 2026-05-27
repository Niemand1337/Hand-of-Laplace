import Skill from "../skill";

// Skills that stack, taking them multiple times adds the value of the effect to the others
export default abstract class StackingSkill extends Skill {
    skillClass: number = 1; // StackingSkills are class 2

    constructor(skillType: number, value: number) {
        super(skillType, value);
    }

    add(skills: Skill[]): void {
        for (let skill of skills) {
            if (skill.name === this.name) { // Skill already exist, add the value to it
                skill.revert(); // Revert the changes of the old skill before changing it
                skill.value += this.value;
                return;
            }
        }
        skills.push(this); // Skill dosn't exist, add it
    }
}