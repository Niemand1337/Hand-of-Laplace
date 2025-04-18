import { Skill } from "../skills";

// Skills that stack, taking them multiple times adds the value of the effect to the others
export default abstract class StackingSkill extends Skill {
    skillClass: number = 1; // StackingSkills are class 2

    constructor(skillType: number, name: String, value: number) {
        super(skillType, name, value);
    }

    add(skills: Skill[]): void {
        for (let skill of skills) {
            if (skill.name === this.name) { // Skill already exist, add the value to it
                skill.value += this.value;
                return;
            }
        }
        skills.push(this); // Skill dosn't exist, add it
    }
}