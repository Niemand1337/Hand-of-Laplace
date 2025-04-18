export abstract class Skill {
    abstract skillClass: number; // Each implementing class has its unique number
    skillType: number;
    name: String;
    value: number; // The value associated with the skill, can be 0 in some cases

    constructor(skillType: number, name: String, value: number) {
        this.skillType = skillType;
        this.name = name;
        this.value = value;
    }

    /**
     * Every skill will be called by this function
     */
    abstract activate(): void

    /**
     * Adds the skill to the Skill[]
     * Works inplace, so no return is necessary
     * Don't use push instead
     * @param skills - The current skills
     */
    abstract add(skills: Skill[]): void

    /**
     * Call if the skill will be deleted from the list
     * Some of the inhereting classes will overwrite this
     */
    remove(skills: Skill[]): void {
        skills.splice(skills.findIndex(skill => { skill.name === this.name;}));
    }
}