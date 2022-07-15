// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Keyboard = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(this.trackLength);
    this.view = new View();
    this.boomerang = new Boomerang(this.hero, this.hero.position);
    this.track = [];
    this.keyboard = new Keyboard(this.boomerang, this.hero);
    this.regenerateTrack();
  }
}

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    if (this.boomerang.boomerangFly) {
      this.track[this.boomerang.position] = this.boomerang.skin;
    }
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.generateDieCrest();
      this.hero.die();
    }
    if (this.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      this.boomerang.boomerangFly = false;
      this.boomerang.position = 0;
      this.boomerang.killEnemy = true;
      setTimeout(() => {
        this.enemy = new Enemy(this.trackLength);
      }, 100);
    }
    if (this.enemy.position !== this.boomerang.position) {
      this.enemy.moveLeft();
  }
}

  play() {
    this.keyboard.runInteractiveConsole()

    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 50);
  }


module.exports = Game;
