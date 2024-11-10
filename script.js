'use strict';

let score = 20;
let highScore = 0;

let secretNumber = generateNumber();

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

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
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateNumber();
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
