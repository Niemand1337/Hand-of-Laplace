import { Skill } from "../Skill/skills";

export class LevelNode {
    skill: Skill; // The skill the node adds to the player
    acquired: boolean // The skill node is activated
    left: LevelNode | null; // Child
    mid: LevelNode | null; // Child
    right: LevelNode | null; // Child

    constructor(skill: Skill, left: LevelNode | null = null, mid: LevelNode | null = null, right: LevelNode | null = null) {
        this.skill = skill;
        this.acquired = false;
        this.left = left;
        this.mid = mid;
        this.right = right;
    }

    /**
     * Acquire the skill of the node
     * @returns The skill that was taken
     */
    take(): Skill {
        this.acquired = true;
        return this.skill;
    }
}