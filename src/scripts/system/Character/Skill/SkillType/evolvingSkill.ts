import Skill from "../skill";

/**
 * Skills that evolve. Can completly change and become a new skill, if certain skills already exist
 * Can only evolve with skills of the same skillType
 * The certain skills to replace are needed while adding, but most evolving skills have the same evolution and groups of replaces
 */
export default abstract class EvolvingSkill extends Skill {
    skillClass: number = 3; // EvolutionSkills are class 3
    replaces: String[]; // The skills needed to evolve
    evolution: Skill | null; // Become this skill if added, when all replaces are there. Dont change if null (final evolution)

    constructor(skillType: number, value: number, replaces: String[], evolution: Skill | null) {
        super(skillType, value);
        this.replaces = replaces;
        this.evolution = evolution;
    }

    add(skills: Skill[]): void {
        if (!this.evolution){
            return;
        }

        if (this.evolution_criteria(skills)) {
            this.replaces.forEach(skill_name => { // Removes the skills used for the evolution from the given Skill[]
                skills.forEach(skill => {
                    if (skill.name === skill_name) {
                        skill.remove(skills);
                    }
                });
            });
            this.evolution.add(skills); // Add the evolution skill
            return;
        }
        skills.push(this); // Evolution criteria didn't met, add the skill
    }

    /**
     * Returns if all skills to replace for evolution are there
     * @param skills - The skills of the same skillType
     * @returns - If the skill should evolve
     */
    private evolution_criteria(skills: Skill[]): boolean {
        this.replaces.forEach(skill_name => {
            if (skills.findIndex(skill => { skill.name === skill_name;}) === -1) { // Skill to replace dosn't exist
                return false;
            }
        });
        return true
    }
}