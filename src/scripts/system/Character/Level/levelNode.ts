import Skill from "../Skill/skill";

interface LevelNodeOptions {
    skill: Skill;
    acquired?: boolean;
    blocked?: boolean;
    blocks?: LevelNode[];
    left?: LevelNode | null;
    mid?: LevelNode | null;
    right?: LevelNode | null;
}

export class LevelNode {
    skill: Skill; // The skill the node adds to the player
    acquired: boolean; // The skill node is activated
    blocked: boolean; // If the skill is blocked it can't be taken
    blocks: LevelNode[]; // The skills that are blocked if this one is taken
    left: LevelNode | null; // Child
    mid: LevelNode | null; // Child
    right: LevelNode | null; // Child

    constructor({
        skill,
        acquired = false,
        blocked = false,
        blocks = [],
        left = null,
        mid = null,
        right = null
    }: LevelNodeOptions){
        this.skill = skill;
        this.acquired = acquired;
        this.blocked = blocked;
        this.blocks = blocks;
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