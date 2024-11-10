'use strict';

let score = 20;
let highScore = 0;

let secretNumber = generateNumber();

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
    return;
  }

  if (guess !== secretNumber) {
    if (score <= 1) {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      return;
    }

    score--;
    document.querySelector('.score').textContent = score;

    if (guess > secretNumber) {
      displayMessage('📈 Too high!');
    } else {
      displayMessage('📉 Too low!');
    }

    return;
  }

  if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct number!');

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
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
