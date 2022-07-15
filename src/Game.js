// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang'); // Разкоменчиваем запись
const View = require('./View');
const Keyboard = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Передаем герою бумеранг {position: 0}
    this.enemy = new Enemy(this.trackLength); // Render врага, устанавливаем значение this.trackLength
    this.view = new View();
    this.boomerang = new Boomerang(this.hero, this.hero.position); // Задаем свойство бумеранга this.boomerang = new Boomerang();
    this.track = [];
    this.keyboard = new Keyboard(this.boomerang, this.hero);
    this.regenerateTrack();
  }
  
  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    if (this.boomerang.boomerangFly) {
      this.track[this.boomerang.position] = this.boomerang.skin; 
    }
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin; // Render врага, устанавливаем в метод создание врага.
   // Boomerang, инициализация и его позиция.
    // this.boomerang.fly(); // Попробуем запустить бумеранг.
    // this.enemy.moveLeft() // Двигаем врага.

  }

  check() {
    // if (this.enemy.enemydie) {
    //   this.enemy.generateSkin();
    // }
    if (this.hero.position === this.enemy.position) {
      this.hero.generateDieCrest();
      this.hero.die()
      // this.regenerateTrack()
    }
    if (this.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      this.boomerang.boomerangFly = false;
      this.boomerang.position = 0;
      this.boomerang.killEnemy = true;
      setTimeout(() => {
      this.enemy = new Enemy(this.trackLength)
      }, 100)
      // this.regenerateTrack()
    }
    if (this.enemy.position !== this.boomerang.position) {
      this.enemy.moveLeft()
    }
  }

  play() {
    this.keyboard.runInteractiveConsole()

    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 100);       // Добавляем интервал 100, для анимации
  }
}

module.exports = Game;
