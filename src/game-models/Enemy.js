// Враг.
const Hero = require('./Hero');
const Boomerang = require('./Boomerang')

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = arr.length;
    this.enemyDie = false;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.enemyDie = true;
    // this.position = '?';
    console.log('Enemy is dead!');

  }
}

module.exports = Enemy;
