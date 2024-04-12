// randomly returns either rock, paper, or scissor
function getComputerChoice() {
  const choiceArray = ["ROCK", "PAPER", "SCISSOR"];
  return choice[Math.floor(Math.random() * 3)];
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

  playerIndex = choiceArray.indexOf(playerSelection);
  computerIndex = choiceArray.indexOf(computerSelection);
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