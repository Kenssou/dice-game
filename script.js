"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   const dice = document.querySelector("#dice");
//   const rollDice = document.querySelector("btn--roll");
//   const playerOneScore = document.getElementById("score--0");
//   const playerTwoScore = document.getElementById("score--1");

//   console.log(dice);
//   dice.classList.add("hidden");
//   playerOneScore.textContent = 0;
//   playerTwoScore.textContent = 0;

//   rollDice.addEventListener("click", function () {
//     dice.classList.remove("hidden");

//     const dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
//   });
// });

const dice1 = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const playerOneScore = document.getElementById("score--0");
const playerTwoScore = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const hold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");

var imagesArray = [
  " image/dice-1.png",
  "  image/dice-2.png",
  "  image/dice-3.png",
  "  image/dice-4.png",
  "  image/dice-5.png",
  "  image/dice-6.png",
];

// let scores, currentScore, playingPlayer, play;

// const group = function () {

// };

// group();

dice1.classList.add("hidden");
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let playingPlayer = 0;
let play = true;

current0.textContent = 0;
current1.textContent = 0;

dice1.classList.add("hidden");
player1.classList.remove("player--winner");
player2.classList.remove("player--winner");
player1.classList.add("player--active");
player2.classList.remove("player--active");

const changePlayer = function () {
  document.getElementById(`current--${playingPlayer}`).textContent = 0;
  playingPlayer = playingPlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

rollDice.addEventListener("click", function () {
  if (play) {
    dice1.classList.remove("hidden");
    const dice = Math.floor(Math.random() * imagesArray.length);

    dice1.src = imagesArray[dice];

    // dice1.src = `image/dice-$(dice).png`;
    // dice1.src = `image/dice-$(dice).png`;
    // console.log(dice, imagesArray[dice]);

    if (dice !== 0) {
      currentScore += dice + 1;
      // currentScore.textContent = currentScore;
      document.getElementById(`current--${playingPlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (play) {
    scores[playingPlayer] += currentScore;
    document.getElementById(`score--${playingPlayer}`).textContent =
      scores[playingPlayer];

    if (scores[playingPlayer] >= 100) {
      play = false;
      document

        .querySelector(`.player--${playingPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${playingPlayer}`)
        .classList.add("player--winner");
      dice1.classList.add("hidden");
    } else {
      changePlayer();
    }
  }
});

newGame.addEventListener("click", function () {
  dice1.classList.add("hidden");
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;

  let scores = [0, 0];
  let currentScore = 0;
  let playingPlayer = 0;
  let play = true;

  current0.textContent = 0;
  current1.textContent = 0;

  dice1.classList.add("hidden");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
});
