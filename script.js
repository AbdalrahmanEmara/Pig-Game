'use strict';

// Selecting Elements
const score1EL = document.querySelector('#score--0');
const score2EL = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--roll');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--roll');

let currentScore = 0;

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
    current0El.textContent = currentScore; // CHANGE LATER

  } else {
    // switch to next player

  }

})

