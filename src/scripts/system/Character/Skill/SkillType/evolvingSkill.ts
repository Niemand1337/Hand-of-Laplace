import { Skill } from "../skills";

// Skills that evolve. Can completly change and become a new skill, if certain skills already exist 
// The certain skills to replace are needed while adding, but most evolving skills have the same evolution and groups of replaces
export default abstract class EvolvingSkill extends Skill {
    skillClass: number = 3; // EvolutionSkills are class 3
    replaces: String[]; // The skills needed to evolve
    evolution: Skill; // Become this skill if added, when all replaces are there

    constructor(skillType: number, name: String, replaces: String[], evolution: Skill) {
        super(skillType, name);
        this.replaces = replaces;
        this.evolution = evolution;
    }
}