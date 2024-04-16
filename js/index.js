"use strict";

const choiceArray = ["ROCK", "PAPER", "SCISSOR"];

// randomly returns either rock, paper, or scissor
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * 3)];
}

// calculates the winner of the round
function playRound(playerSelection, computerSelection) {
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
      return "Tie";
    case 1:
    case -2:
      return "Player";
    case -1:
    case 2:
      return "Computer";
    default:
      console.error("Invalid Selection");
      return null;
  }
}

const choices = [...document.querySelectorAll(".choices > button")];

let playerScore = 0;
let computerScore = 0;
let round = 1;

choices.forEach((choice, index, arr) => {
  choice.addEventListener("click", (event) => {
    const playerSelection = choiceArray[index];
    const computerSelection = getComputerChoice();

    console.log(`Round ${round}`);
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    const currentResult = document.querySelector(".results-div > .current-result");
    const scores = document.querySelector(".results-div > .scores");
    const finalResult = document.querySelector(".results-div > .final-result");
    const winner = playRound(playerSelection, computerSelection);
    let resultText = `Round ${round}: `;
    switch (winner) {
      case "Player":
        playerScore++;
        resultText += `Player Wins! ${playerSelection} beats ${computerSelection}.`;
        break;
      case "Computer":
        resultText += `Computer Wins! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
        break;
      case "Tie":
        resultText += `It's a Tie!`;
        break;
      default:
        console.error("An Error Has Occurred");
    }

    if (playerScore === 5 || computerScore === 5) {
      choices.forEach(choice => {
        choice.disabled = true;
      })

      if (playerScore === 5) {
        finalResult.textContent = "Player Wins the Game!!";
      } else if (computerScore === 5) {
        finalResult.textContent = "Computer Wins the Game!!";
      }
      const btnPlayAgain = document.createElement("button");
      btnPlayAgain.textContent = "Play Again?";
      
      btnPlayAgain.addEventListener("click", (event) => {
        choices.forEach(choice => {
          choice.disabled = false;
        })
        playerScore = 0;
        computerScore = 0;
        round = 1;
        currentResult.textContent = "";
        scores.textContent = "";
        finalResult.textContent = "";
        btnPlayAgain.remove();
      })

      const body = document.querySelector("body");
      body.append(btnPlayAgain);
    }

    scores.textContent = `Scores: Player: ${playerScore} Computer: ${computerScore}`;
    currentResult.textContent = resultText;
    
    round++;
  })
})