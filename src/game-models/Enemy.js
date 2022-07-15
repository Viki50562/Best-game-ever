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
    console.log('\x1b[36m%s\x1b[0m', 'ТЕЛЕЖКА УНИЧТОЖИЛА ВРАГА!');
  }
}

module.exports = Enemy;
