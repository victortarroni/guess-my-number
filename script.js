'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😄 Correct number!'
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
let score = 20;
let highScore = 0;
const displayMessage = function (message){
  document.querySelector('.message').textContent = message;
}



let secretNumber = Math.trunc(Math.random() * 20) +1;


document.querySelector('.check').addEventListener('click', function () {
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

document.querySelector('.again').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // aqui somente funcionou quando eu nao usei o let porque aqui eu estou reescrevendo a funcao secretNumber. Dando o mesmo valor prescrevido a ela. Ou seja, resetando ela.
  document.querySelector('.message').textContent = 'Start guessing...!'
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';

  // Eu nao precisei especificar no return cada uma das constantes para executar essa funcao.
})

// nao consegui estabelecer o highscore e a funcao apra desvendar o numero se assim acertado.