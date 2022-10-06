const randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const playAgain = document.querySelector('.playAgain');
const smile = document.querySelector('.smile');
const myLuck = document.querySelector('.myLuck');

let counterDisplay = document.querySelector('.counter-display');
let count = 0;

guesses.textContent = 'Previous guesses: ';

function restart() {
  location.reload();
}

function checkGuess() {
  const userGuess = Number(guessField.value);

  if (userGuess < 1 || userGuess > 100) {
    output('🫣', 'Oops, try a valid number!', 'You need to submit a number 1-100!', 'red');
  } else if (userGuess == randomNumber) {
    // rätt gissningskod här
    output('🥳', 'You are amazing!', 'You are right! You read my mind!', 'green');
    guesses.textContent += userGuess + ', ';
    count++;
  } else if (userGuess >= 1 && userGuess <= 100) {
    // fel gissningskod här
    output('🤪', 'Unlucky, try again!', 'Wrong!', 'red');
    guesses.textContent += userGuess + ', ';

    if (userGuess > randomNumber) {
      output('🙃', 'Too high!', 'Your guess was too high', 'red');
    } else if (userGuess < randomNumber) {
      output('😅', `Too low!`, 'Your guess was too low', 'red');
    }
    count++;
  }
  guessField.value = '';
  guessField.focus();
  counterDisplay.innerHTML = 'Total guesses: ' + count;
}
guessSubmit.addEventListener('click', checkGuess);
playAgain.addEventListener('click', restart);

const output = (smile, myLuck, message, color) => {
  document.getElementById('smile').innerHTML = smile;
  document.getElementById('myLuck').innerHTML = myLuck;
  lastResult.textContent = message;
  lastResult.style.backgroundColor = color;
};