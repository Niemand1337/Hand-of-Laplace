import { Stats } from "../../system/Character/Player/stats";

export default class Tester1Stats extends Stats {
    constructor() {
        super({
            current_health: 1337,
            maximal_health: 420,
        });
    }
}