const randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const playAgain = document.querySelector('.playAgain');
let counterDisplay = document.querySelector('.counter-display');
let count = 0;
guesses.textContent = 'Previous guesses: '


function restart(){
  location.reload();
}

function checkGuess() {
  const userGuess = Number(guessField.value);
  
  guesses.textContent += userGuess + ', ';

  if (userGuess == randomNumber) {
    // rätt gissningskod här
    lastResult.textContent = 'You are right! You read my mind!';
    lastResult.style.backgroundColor = 'green';
    
  } else {
    // fel gissningskod här
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Your guess was too high';
    } else if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Your guess was too low';
    }
  }
  guessField.value = '';
  count ++;
  counterDisplay.innerHTML ="Total guesses: " + count;
}
guessSubmit.addEventListener('click', checkGuess);
playAgain.addEventListener('click', restart)