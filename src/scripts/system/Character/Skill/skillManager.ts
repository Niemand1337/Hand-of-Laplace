import { Skill } from "./skills";

export class SkillManager {
    skills: Skill[];

    constructor() {
        this.skills = [];
    }

    /**
     * Adds a skill to the player skills
     * If it is a stronger Version removest he old one
     * Example: Health II would be removed if the new skill is Health III
     * @param skill - The new skill
     */
    addSkill(skill: Skill) {

    }
}