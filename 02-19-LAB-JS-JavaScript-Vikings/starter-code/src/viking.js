// // Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// // Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// // Saxon
class Saxon extends Soldier {
  // you don't have to do this since if you simply don't define this method, you will inherit perfectly from the parents class
  //   constructor(health, strength) {
  //     super(health, strength);
  //   }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    else return "A Saxon has died in combat";
  }
}

const randomInteger = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1) + minimum);

// // War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  // Jose C. approach:
  _genericAttack(firstArmy, secondArmy) {
    const firstCount = firstArmy.length;
    const secondCount = secondArmy.length;
    const firstIndex = randomInteger(0, firstCount - 1);
    const secondIndex = randomInteger(0, secondCount - 1);

    const first = firstArmy[firstIndex];
    const second = secondArmy[secondIndex];

    const firstStrength = first.strength;
    const attackMessage = second.receiveDamage(firstStrength);

    for (let second of secondArmy) {
      if (second.health <= 0) {
        const index = secondArmy.indexOf(second);
        secondArmy.splice(index, 1);
      }
    }

    return attackMessage;
  }

  vikingAttack() {
    return this._genericAttack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this._genericAttack(this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
    if (this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length === 0)
      return "Saxons have fought for their lives and survived another day...";
    else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
