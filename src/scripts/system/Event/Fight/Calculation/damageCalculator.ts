import { Card } from "../../../Cards/card";
import { SkillManager } from "../../../Character/Skill/skillManager";
import { Ability } from "../../../Enemy/ability";
import { Combination } from "../../../Combinations/combination";
import Combinator from "../../../Combinations/combinator";


/**
 * Calculatest the damage of cards based on the combination and skills of the player and the enemy
 */
export class DamageCalculator {
    combinator: Combinator;

    constructor() {
        this.combinator = new Combinator();
    }

    /**
     * Calculates the damage the enemy will take
     * - Finds the damaging cards (removes the others, as they don't count)
     * - Damage calculation with the cards
     * - Damage modification with the player skills
     * - Damage modifikation with the enemy skills
     * @param cards - The cards the player selected from the hand
     * @param player_skills - The SkillManager, that applies the skills of the player to the cards
     * @param enemy_skills 
     */
    calculation(cards: Card[], player_skills: SkillManager, enemy_skills: Ability[]): number {
        let combination: Combination = this.combinator.find_combination(cards);

        let damage = combination.damage;
        combination.cards.forEach(card => {damage += card.value})

        // TODO

        return damage;
    }
}