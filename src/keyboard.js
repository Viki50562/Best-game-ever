// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

class Keyboard {
  constructor(boomerang, hero) {
    this.boomerang = boomerang;
    this.hero = hero;
    this.keyboard = {
      space: () => this.boomerang.fly(),
      d: () => this.hero.moveRight(),
      a: () => this.hero.moveLeft(),
    };
  }

  // Какая-то функция.

  runInteractiveConsole() {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in this.keyboard) {
          this.keyboard[key.name]();
        }
        // Прерывание программы.
        if (key.ctrl && key.name === 'c') {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
}

// Давай попробуем запустить этот скрипт!

module.exports = Keyboard;
