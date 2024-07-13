const forms = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return forms[randomNumber];
}

function getHumanChoice() {
  const answer = prompt("Rock, paper or scissors?").trim().toLowerCase();
  return answer;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Your move: ${humanSelection}`);
    console.log(`Computer's move: ${computerSelection}`);

    function playRound(humanChoice, computerChoice) {
      if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock smashes Scissors");
        humanScore++;
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock ");
        computerScore++;
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock ");
        humanScore++;
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors cuts Paper ");
        computerScore++;
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock smashes Scissors ");
        computerScore++;
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors cuts Paper ");
        humanScore++;
      } else {
        console.log("It's a Draw!");
      }
    }

    playRound(humanSelection, computerSelection);
    console.log(
      `Your score is:  ${humanScore} and Computer score is: ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    console.log("------------- YOU WIN! ---------------");
  } else {
    console.log("------------- YOU LOSE! --------------");
  }
}

playGame();

// console.log(playRound());
