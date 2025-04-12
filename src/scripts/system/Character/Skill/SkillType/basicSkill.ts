import { Skill } from "../skills";

// Most basic types of skills, their values and effects don't change
export default abstract class BasicSkill extends Skill {
    skillClass: number = 0; // StackingSkills are class 0

    constructor(skillType: number, name: String) {
        super(skillType, name);
    }
}