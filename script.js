'use strict';

// Selecting Elements
const score1EL = document.querySelector('#score--0');
const score2EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');

// Starting Conditions
score1EL.textContent = 0;
score2EL.textContent = 0;
diceEl.classList.add('hidden');

