import { Skill } from "../skills";

// Skills that stack, taking them multiple times adds the value of the effect to the others
export default abstract class StackingSkill extends Skill {
    skillClass: number = 1; 

    constructor(skillType: number, name: String) {
        super(skillType, name);
    }
}