// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(hero, heroPosition) {
    this.skin = '🌀';
    this.hero = hero;
    this.bomerangFly = false;
    this.boomerangStay = false;
    this.position = heroPosition;
    this.killEnemy = false;
  }

  fly() {
    this.position = this.hero.position;
    this.bomerangFly = true;
    const start = setInterval(() => {
      if (!this.killEnemy) {
        this.moveRight();
      } else { this.moveLeft(start); }
    }, 100);
    // this.moveRight();
    // this.moveLeft();
  }

  moveLeft(start) {
    // Идём влево.
    this.position -= 1;
    if (this.position === this.hero.position) {
      clearInterval(start);
      this.killEnemy = false;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
