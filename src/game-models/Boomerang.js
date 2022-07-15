// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
const Hero = require('./Hero')

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.hero = hero;
    this.fly = false;
    this.position = hero.position;
    this.killEnemy = false;
  }

  fly() {
    this.position = this.hero.position;
    this.fly = true;
    const start = setInterval(() => {
      if (!this.killEnemy) {
        this.moveRight();
      }
      else { this.moveLeft(start)}
    }, 1000)
    // this.moveRight();
    // this.moveLeft();
   
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
    if (this.position === this.hero.position) {
      clearInterval(start);
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    
  }
}

module.exports = Boomerang;
