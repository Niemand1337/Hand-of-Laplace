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
}