'use strict';

//#region Game Initialization

let score = 20;
let highScore = 0;
const check = document.querySelector('.check');
const againBtn = document.querySelector('.again');

//#endregion

//#region Main - check functionionality

const displayMessage = function (message){
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) +1;

check.addEventListener('click', function() {
 const guess =  Number(document.querySelector('.guess').value);
 
if (!guess){
   displayMessage('🔴 You have not inserted a value');

} else if (guess === secretNumber){
  document.querySelector('.message').textContent = 'Yeeeeeep!😄 Correct number!'
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('header').h1.textContent = '🏆 Congrats! You won!';
  document.querySelector('.number').style.width = '30rem';
  
if(score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
}

// Guess is too high
} else if (guess > secretNumber){
  if (score > 0) {
  document.querySelector('.message').textContent = 'Ooops!🤯, too high!';
  score--;
  document.querySelector('.score').textContent = score;

  } else {
    displayMessage('🥲, You lost the game!');
  }

  // Guess is too low
} else if (guess < secretNumber){
  if (score > 0) {
    document.querySelector('.message').textContent = 'Oh no!😤 too low!';
    score--;
    document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🥲, You lost the game!');
    }
}
});

//#endregion

//#region Again Btn - reset

againBtn.addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...!'
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
})

//#endregion