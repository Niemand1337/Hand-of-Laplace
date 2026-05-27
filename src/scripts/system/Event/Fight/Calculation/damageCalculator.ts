import { Card } from "../../../Cards/card";
import { SkillManager } from "../../../Character/Skill/skillManager";
import { Combination } from "../../../Combinations/combination";
import Combinator from "../../../Combinations/combinator";


/**
 * Calculatest the damage of cards based on the combination and skills of the player and the enemy
 */
export class DamageCalculator {
    combinator: Combinator;
    playerSkillManager: SkillManager;
    enemySkillManager: SkillManager;

    constructor(playerSkillManager: SkillManager, enemySkillManager: SkillManager) {
        this.combinator = new Combinator();
        this.playerSkillManager = playerSkillManager;
        this.enemySkillManager = enemySkillManager;
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
    calculation(cards: Card[]): Combination {
        // Base damage of the combination + card damage
        let combination: Combination = this.combinator.find_combination(cards);
        combination.cards.forEach(card => {combination.damage += card.value})

        // Apply player and enemy skills to the combination
        combination = this.playerSkillManager.apply_all_skills(combination);
        combination = this.enemySkillManager.apply_all_skills(combination);
        
        return combination;
    }
}