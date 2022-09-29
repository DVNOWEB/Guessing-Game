const randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);

  guesses.textContent += userGuess + ' ';

  if (userGuess == randomNumber) {
    // put all the right guess code in here
    lastResult.textContent = 'You are right! You read my mind!';
    lastResult.style.backgroundColor = 'green';
    gameOver();
  } else {
    // put all the wrong guess code in here
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Your guess was too high';
    } else if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Your guess was too low';
    } 
  }
}
guessSubmit.addEventListener('click', checkGuess);
