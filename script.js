'use strict';

// Get All Element
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Score Data
let score = 20;

// Highscore Data
let highscore = 0;

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const inputGuess = document.querySelector('.guess');
const numberDisplay = document.querySelector('.number');
const messageDisplay = document.querySelector('.message');
let scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');

// Function Handle Win
const handleWin = function () {
  numberDisplay.textContent = secretNumber;
  messageDisplay.textContent = 'Correct Number!';
  // Ubah background color
  document.querySelector('body').style.backgroundColor = '#60b347';
  // Perlebar Kotak
  numberDisplay.style.width = '30rem';

  if (score > highscore) {
    highscore = score;
    highscoreDisplay.textContent = highscore;
  }
};

// Function Handle Wrong Guess
const handleWrongGuess = function (guess) {
  messageDisplay.textContent = guess > secretNumber ? 'To High!' : 'To Low';

  // Reduce Score
  score--;
  scoreDisplay.textContent = score;

  // Call Animation
  document.body.classList.add('shake');
  setTimeout(function () {
    document.body.classList.remove('shake');
  }, 500);
};

// Function GameOver
const gameOver = function () {
  messageDisplay.textContent = 'You lost the game!';
  scoreDisplay.textContent = 0;

  btnCheck.disabled = true;

  // Background
  document.querySelector('body').style.backgroundColor = '#C80036';
};

// Function Button Check Clicked
const checkGuess = function () {
  const guess = Number(inputGuess.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    messageDisplay.textContent = 'No Number!';
  } else if (guess === secretNumber) {
    // Win
    handleWin();
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Wrong Guess
      handleWrongGuess(guess);
    } else {
      // When score is 0
      gameOver();
    }
  }
};

// Function Reset Game
const resetGame = function () {
  score = 20;
  messageDisplay.textContent = 'Start guessing...';
  scoreDisplay.textContent = score;

  // Secret Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  numberDisplay.textContent = '?';
  numberDisplay.style.width = '15rem';

  // Input Guess
  inputGuess.value = '';

  // Btn Check
  btnCheck.disabled = false;

  // Background
  document.querySelector('body').style.backgroundColor = '#222';
};

btnCheck.addEventListener('click', checkGuess);
btnAgain.addEventListener('click', resetGame);
