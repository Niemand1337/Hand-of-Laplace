import { LevelNode } from "../../System/Character/Level/levelNode";
import { AdeptBrawler, ApprenticeBrawler, MasterBrawler, NoviceBrawler } from "../../System/Character/Skill/Skills/Brawler";
import Skilltree from "../../System/Character/Skill/skilltree";


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