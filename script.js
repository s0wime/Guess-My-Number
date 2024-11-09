'use strict';

let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    return;
  }

  if (guess !== secretNumber) {
    if (score <= 1) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      return;
    }

    score--;
    document.querySelector('.score').textContent = score;

    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too high!';
    } else {
      document.querySelector('.message').textContent = '📉 Too low!';
    }

    return;
  }

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
  }
});
