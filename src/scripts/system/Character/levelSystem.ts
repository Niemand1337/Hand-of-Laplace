export class LevelSystem {
    level: number; // The current level of the player
    maximal_xp: number; // The xp where the level up happens
    current_xp: number; // The xp the player currently has

    constructor(level: number = 0, maximal_xp: number = 100, current_xp: number = 0) {
        this.level = level;
        this.maximal_xp = maximal_xp;
        this.current_xp = current_xp;
    }

    /**
     * Add xp to the player, returns true on level up
     * @param x - The amount of xp the player receives
     * @returns true on level up, else false
     */
    change_current_xp(x: number): boolean {
        this.current_xp += x;
        if(this.current_xp >= this.maximal_xp) { // Level up
            this.current_xp -= this.maximal_xp;
            this.level++;
            return true;
        }
        return false;
    }

    /**
     * Add x to the maximal_xp to change it.
     * Checks for level up (possible on x < 0) and returns true on it
     * @param x - Value to change, can be negative
     * @returns true on level up, else false
     */
    change_maximal_xp(x: number): boolean {
        this.maximal_xp += x;
        return this.change_current_xp(0); // Checks for level up on negative values
    }
}