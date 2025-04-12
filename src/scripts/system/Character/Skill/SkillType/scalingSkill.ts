import { Skill } from "../skills";

// Skills that scale, takeing it multiple times increases the level of it
export default abstract class ScalingSkill extends Skill {
    skillClass: number = 2; // StackingSkills are class 2
    level: number;

    constructor(skillType: number, name: String, level: number = 1) {
        super(skillType, name);
        this.level = level;
    }
}