const computerPlay = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)]
}

const playGame = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    console.log(`You win! Rock beats scissors.`);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    console.log(`You win! Paper beats rock.`);
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    console.log(`You win! Scissors beat paper.`);
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    console.log(`You lose. Paper beats rock.`);
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    console.log(`You lose. Scissors beat paper.`);
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    console.log(`You lose. Rock beats scissors.`);
  } else if (playerSelection === computerSelection) {
    console.log(`It's a draw!`);
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("rps?").toLowerCase();
    playGame(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    return 'You win!';
  } else if (computerScore > playerScore) {
    return 'You lose!';
  }
  return 'It\s a tie.';
}

let playerScore = 0;
let computerScore = 0;
console.log(game());