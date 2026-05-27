import { SkillType } from "./enums";

export default abstract class Skill {
    abstract skillClass: number; // Each implementing class has its unique number
    skillType: SkillType;
    name: String;
    value: number; // The value associated with the skill, can be 0 in some cases

    constructor(skillType: SkillType, value: number) {
        this.skillType = skillType;
        this.name = this.constructor.name;
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
     * Not only removes the skill from the list inplace, but also reverts the changes of it
     */
    remove(skills: Skill[]): void {
        this.revert();
        skills.splice(skills.findIndex(skill => { skill.name === this.name;}), 1);
    }

    /**
     * Reverts the changes of the skill
     * Mostly used for stat changes, as others can just be removed
     */
    abstract revert(): void
}