import { LevelNode } from "../../system/Character/Level/levelNode";
import { AdeptBrawler, ApprenticeBrawler, MasterBrawler, NoviceBrawler } from "../../system/Character/Skill/Skills/Brawler";
import Skilltree from "../../system/Character/Skill/skilltree";


export default class Tester1Skilltree extends Skilltree {
    constructor() {
        super(
            "Tester1",
            new LevelNode({
                skill: new NoviceBrawler(),
                mid: new LevelNode({
                    skill: new ApprenticeBrawler(),
                    mid: new LevelNode({
                        skill: new AdeptBrawler(),
                        mid: new LevelNode({
                            skill: new MasterBrawler()
                        })
                    })
                })
            })
        );
    }
}