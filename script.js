'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score1EL = document.querySelector('#score--0');
const score2EL = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnRules = document.querySelector('.btn--rules');
const popupOverlay = document.querySelector('.popup-overlay');
const closePopup = document.querySelector('.close-popup');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting Conditions
const init = function () {
  // 1. set all scores 0
  score1EL.textContent = 0;
  score2EL.textContent = 0;
  currentScore = 0;
  scores = [0, 0];
  current0El.textContent = 0;
  current1El.textContent = 0;

  // 2. Reset visuals
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  // 3. start playing
  activePlayer = 0;
  playing = true;

  // 4. set player1 as starting player
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
};
init();

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

// Reset the Game
btnNew.addEventListener('click', init);

// Rules Button
btnRules.addEventListener('click', function () {
  popupOverlay.classList.add('active');
});

closePopup.addEventListener('click', function () {
  popupOverlay.classList.remove('active');
});

popupOverlay.addEventListener('click', function (e) {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});

// Show popup on page load
window.addEventListener('load', function () {
  setTimeout(function () {
    popupOverlay.classList.add('active');
  }, 1000);
});
