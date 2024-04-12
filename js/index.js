"use strict";

// randomly returns either rock, paper, or scissor
function getComputerChoice() {
  const choiceArray = ["ROCK", "PAPER", "SCISSOR"];
  return choiceArray[Math.floor(Math.random() * 3)];
}

// calculates the winner of the round
function playRound(playerSelection, computerSelection) {
  const choiceArray = ["ROCK", "PAPER", "SCISSOR"];
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (!choiceArray.includes(playerSelection)) {
    console.error("Invalid Selection");
    return null;
  }

  let playerIndex = choiceArray.indexOf(playerSelection);
  let computerIndex = choiceArray.indexOf(computerSelection);
  switch (playerIndex - computerIndex) {
    case 0: 
      return "It's a Tie!";
    case 1:
    case -2:
      return `You Win! ${playerSelection} beats ${computerSelection}.`;
    case -1:
    case 2:
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    default:
      console.error("Invalid Selection");
      return null;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(`Round ${i}\nEnter Choice (Rock, Paper, Scissor)`);
    let computerSelection = getComputerChoice();
    console.log(`Round ${i}`);
    console.log(playRound(playerSelection, computerSelection));
  }
}

playGame();