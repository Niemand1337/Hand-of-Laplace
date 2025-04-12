export abstract class Skill {
    abstract skillClass: number; // Each implementing class has its unique number
    skillType: number;
    name: String;

    constructor(skillType: number, name: String) {
        this.skillType = skillType;
        this.name = name;
    }

    /**
     * Every skill will be called by this function
     */
    abstract activate(): void

    /**
     * Adds the skill to the Skill[]
     * Don't use push instead
     * @param skills - The current skills
     * @returns - Skill[] the new skills
     */
    abstract add(skills: Skill[]): Skill[]

    /**
     * Call if the skill will be deleted from the list
     */
    abstract remove(): void
}