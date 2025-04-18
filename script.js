'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score1EL = document.querySelector('#score--0');
const score2EL = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let playing = true;

// Starting Conditions
score1EL.textContent = 0;
score2EL.textContent = 0;
diceEl.classList.add('hidden');
score1EL.textContent = Number(0);

// Global Functions
const switchPlayer = function () {
  // reset values
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // switch players
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1) Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2) Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3) Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// Button Hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's scores
    scores[activePlayer] += currentScore;

    // update total scores
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check the winner if the player's score >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});
