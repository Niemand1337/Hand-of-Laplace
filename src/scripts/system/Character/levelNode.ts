import { Skill } from "./skills";

export class LevelNode {
    skill: Skill; // The skill the node adds to the player
    left: LevelNode | null; // Child
    mid: LevelNode | null; // Child
    right: LevelNode | null; // Child

    constructor(skill: Skill, left: LevelNode | null = null, mid: LevelNode | null = null, right: LevelNode | null = null) {
        this.skill = skill;
        this.left = left;
        this.mid = mid;
        this.right = right;
    }
}