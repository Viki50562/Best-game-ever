// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(hero, heroPosition) {
    this.skin = '💣';
    this.hero = hero;
    this.boomerangFly = false;
    this.boomerangStay = false;
    this.position = heroPosition; // Установили бумеранги на позицию
    this.killEnemy = false; // Событие определяющее убийство врага
  }

  fly() { // Попытка вернуть бумеранг
    this.position = this.hero.position;
    this.boomerangFly = true;
    const id = setInterval(() => {
      if (!this.killEnemy) {
        this.moveRight();
      } else {
        this.moveLeft(id);
      }
    }, 100);
  } // Конец

  moveLeft(id) {
  //  if (this.position > 0)this.position -= 1;
    if (this.position === this.hero.position) {
      clearInterval(id);
      this.killEnemy = false;
    }
  }

  moveRight() {
    this.position += 1;
  }
}

module.exports = Boomerang;
