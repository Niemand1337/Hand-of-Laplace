export class Stats {
    handsize: number; // How many cards the player can have on his hand
    current_health: number; // If 0 the player loses
    maximal_health: number; // current_health can't go higher than this

    constructor(handsize: number, current_health: number, maximal_health: number = current_health) {
        this.handsize = handsize;
        this.current_health = current_health;
        this.maximal_health = maximal_health;
    }

    /**
     * Change the handsize by adding x
     * @param x - The value that is added to the handsize
     */
    change_handsize(x: number) {
        this.handsize += x;
        if (this.handsize < 0) { // No negative length
            this.handsize = 0;
        } 
    }

    /**
     * Decreases the current_health to the maximal_health, if it is higher
     */
    health_limit() {
        if (this.current_health > this.maximal_health) {
            this.current_health = this.maximal_health;
        }
    }

    /**
     * Increases the current_health by a set value
     * @param x - The amount of life that should be healed
     */
    heal_value(x: number) {
        this.current_health += x;
        this.health_limit();
    }

    /**
     * Increases the current_health by a percentage of the maximal_health
     * @param x - The percentage of maximal_health that should be healed
     */
    heal_percent_maximal(x: number) {
        this.current_health += Math.floor(this.maximal_health * (x / 100));
        this.health_limit();
    }

    /**
     * Increases the current_health by a percentage of the current_health
     * @param x - The percentage of current_health that should be healed
     */
    heal_percent_current(x: number) {
        this.current_health += Math.floor(this.current_health * (x / 100));
        this.health_limit();
    }
}