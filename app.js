const randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
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
    document.getElementById('smile').innerHTML = '🫣';
    document.getElementById('myLuck').innerHTML = 'Oops not number, try again!';
    lastResult.textContent = 'You need to submit a number 1-100!';
    lastResult.style.backgroundColor = 'red';
  } else if (userGuess == randomNumber) {
    // rätt gissningskod här
    lastResult.textContent = 'You are right! You read my mind!';
    document.getElementById('myLuck').innerHTML = 'You are amazing!';
    document.getElementById('smile').innerHTML = '🥳';
    lastResult.style.backgroundColor = 'green';
    guesses.textContent += userGuess + ', ';
    count++;
  } else if (userGuess >= 1 && userGuess <= 100) {
    // fel gissningskod här
    document.getElementById('myLuck').innerHTML = 'Unlucky, try again!';
    document.getElementById('smile').innerHTML = '🤪';
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    guesses.textContent += userGuess + ', ';

    if (userGuess > randomNumber) {
      document.getElementById('myLuck').innerHTML = 'Too high! You are almost there';
      document.getElementById('smile').innerHTML = '⬆️';
      lowOrHi.textContent = 'Your guess was too high';
    } else if (userGuess < randomNumber) {
      document.getElementById('myLuck').innerHTML = `Too low! It's starting to get hot here`;
      document.getElementById('smile').innerHTML = '⬇️';
      lowOrHi.textContent = 'Your guess was too low';
    }
    count++;
  } else {
    lastResult.textContent = 'Please enter a NUMBER 1-100';
    lastResult.style.backgroundColor = 'red';
  }

  guessField.value = '';
  guessField.focus();
  counterDisplay.innerHTML = 'Total guesses: ' + count;
}
guessSubmit.addEventListener('click', checkGuess);
playAgain.addEventListener('click', restart);
