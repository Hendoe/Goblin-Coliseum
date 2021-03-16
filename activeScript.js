let goblin = {
    health: 100,
    power: 7,
};

let goblin1 = {
    health: 100,
    power: 7,
};
let goblin2 = {
    health: 100,
    power: 7,
};
let fightingGoblins = [];

let axe = {
    damage: 21,
    reach: 3,
};

const sword = {
    damage: 16,
    reach: 5,
};

const newAttack = (atk, def, wep) => {
    console.log('attack called');
    incoming = atk.power + wep.damage;
    combatantHealth = def.health - incoming;
    console.log(`Defending Goblin has ${combatantHealth} percent of it's health left!`);
    return woundedGoblin(def, incoming);
};

const woundedGoblin = (gobbo, pain) => {
    console.log('wound calculation');
    gobbo.health -= pain;
    console.log(`The Gobbo suffered ${pain} points of painful damage`);
    return gobbo; 
};
    
function combatRound(gob1, wep1, gob2, wep2) {
    console.log('combat round start');
    let defender = newAttack(gob1, gob2, wep1);
    let attacker = newAttack(defender, gob1, wep2);
    fightingGoblins = [attacker, defender];
    return `After a single round, the aggresor Goblin has ${attacker.health} points of health left, compared to the defenders ${defender.health} points of health.`;  
};

console.log(combatRound(goblin1, axe, goblin2, sword));
console.log("Goblin #1");
console.log(goblin1);
console.log("Goblin #2");
console.log(goblin2);
console.log(fightingGoblins);