// Враг.

class Enemy {
  constructor(trackLength) {
    this.generateSkin();
    this.enemydie = false;
    this.position = trackLength;
  }

  generateSkin() {
    const skins = ['👩', '👮', '👵', '🤵', '🕵'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.enemyDie = true;
    this.skin = '💀';
    // this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
