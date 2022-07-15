// Наш герой.

class Hero {
  constructor({ position }) {
    this.generateHeroSkin();
    this.position = position;
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    if (this.position < 50) {
      this.position += 1;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  generateHeroSkin() {
    this.skin = '🦹‍♂️';
  }

  generateDieCrest() {
    this.skin = '💀';
  }

  die() {
    this.skin = '💀';
    console.log("\x1b[45m", 'ВСЕМ ПОКЕДОВА!💀');
    process.exit();
  }
}

module.exports = Hero;
