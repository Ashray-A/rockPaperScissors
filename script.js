function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const resultDiv = document.getElementById('result');

  if (playerSelection === computerSelection.toLowerCase()) {
    resultDiv.textContent = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
    (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
    (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
  ) {
    resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  if (playerScore >= 5) {
    resultDiv.textContent += ` | You win the game! Final Score: ${playerScore}-${computerScore}`;
  } else if (computerScore >= 5) {
    resultDiv.textContent += ` | You lose the game. Final Score: ${playerScore}-${computerScore}`;
  } else {
    resultDiv.textContent += ` | Score: ${playerScore}-${computerScore}`;
  }
}

document.getElementById('rock').addEventListener('click', function() {
  playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', function() {
  playRound('paper', getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', function() {
  playRound('scissors', getComputerChoice());
});
