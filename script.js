'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    return;
  }

  if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    return;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
    return;
  }

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
  }
});
