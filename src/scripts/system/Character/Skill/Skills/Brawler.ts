import EvolvingSkill from "../SkillType/evolvingSkill";
import { SkillType } from "../enums";
import { Player } from "../../Player/player";
import Skill from "../skill";

/**
 * Novice Brawler is a skill that increases the character's max_life by 10.
 * Will evolve int Apprentice Brawler, which increases max_life by 20 and replaces Novice Brawler.
 */
abstract class Brawler extends EvolvingSkill {
    constructor(value: number, replaces: String[], evolution: Skill | null) {
        super(SkillType.stat, value, replaces, evolution);
    }

    activate(player?: Player): void {
        if (player) {
            player.stats.maximal_health += this.value;
        }
    }

    revert(player?: Player): void {
        if (player) {
            player.stats.maximal_health -= this.value;
        }
    }
}

/**
 * Novice Brawler is a skill that increases the character's max_life by 10.
 * Will evolve into Apprentice Brawler, which increases max_life by 25 and replaces Novice Brawler.
 */
export class NoviceBrawler extends Brawler {
    constructor() {
        super(10, ["Apprentice Brawler"], new ApprenticeBrawler());
    }
}


/**
 * Apprentice Brawler is a skill that increases the character's max_life by 25.
 * Will evolve into Adept Brawler, which increases max_life by 30 and replaces Apprentice Brawler.
 */
export class ApprenticeBrawler extends Brawler {
    constructor() {
        super(25, ["Adept Brawler"], new AdeptBrawler());
    }
}

/**
 * Adept Brawler is a skill that increases the character's max_life by 50.
 * Will evolve into Master Brawler, which increases max_life by 70 and replaces Adept Brawler.
 */
export class AdeptBrawler extends Brawler {
    constructor() {
        super(50, ["Master Brawler"], new MasterBrawler());
    }
}


/**
 * Master Brawler is a skill that increases the character's max_life by 75.
 */
export class MasterBrawler extends Brawler {
    constructor() {
        super(75, ["Final"], null);
    }
}