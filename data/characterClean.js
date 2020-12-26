const fs = require("fs");
const character = require('./character_table.json');
const skill = require('./skill_table.json');

function extractEvolveCosts(phases) {
    const arr = [];

    phases.forEach(p => {
        arr.push(p.evolveCost);
    });

    return arr;
}

function extractSkillCosts(skills) {
    const skillCosts = [];

    skills.forEach(s => {
        // console.log(s.skillId);
        skillCosts.push({
            "skillId": s.skillId,
            "skillName": skill[s.skillId].levels[0].name,
            "levelUpCosts": extractLevelUpCosts(s.levelUpCostCond)
        })
    });

    return skillCosts;
}

function extractLevelUpCosts(levelUpCostCond) {
    const levelUpCosts = [];

    levelUpCostCond.forEach(l => {
        levelUpCosts.push(l.levelUpCost);
    });

    return levelUpCosts;
}

function extractAllSkillCosts(allSkillLvlup) {
    const allSkillCosts = [];

    allSkillLvlup.forEach(a => {
        allSkillCosts.push(a.lvlUpCost);
    });

    return allSkillCosts;
}

const character_clean = {};

for (cid in character) {

    const c = character[cid];

    if (c.profession == "TOKEN") {
        continue;
    }

    character_clean[cid] = {
        "name": c.name,
        "rarity": c.rarity,
        "profession": c.profession,
        "evolveCosts": extractEvolveCosts(c.phases),
        "skillCosts": extractSkillCosts(c.skills),
        "allSkillCosts": extractAllSkillCosts(c.allSkillLvlup),
    };
    
}

fs.writeFile("./character_clean.json", JSON.stringify(character_clean, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});