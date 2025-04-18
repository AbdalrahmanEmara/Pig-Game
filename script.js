'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score1EL = document.querySelector('#score--0');
const score2EL = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--roll');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--roll');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Starting Conditions
score1EL.textContent = 0;
score2EL.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1) Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2) Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3) Check for rolled 1 
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // switch to next player
    // reset values
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // switch players
    activePlayer = activePlayer === 0 ? 1 : 0;    
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  } 

})

