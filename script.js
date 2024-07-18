const forms = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return forms[randomNumber];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    pResult.textContent = "You win! Rock smashes Scissors";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    pResult.textContent = "You lose! Paper beats Rock ";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    pResult.textContent = "You Win! Paper beats Rock ";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    pResult.textContent = "You lose! Scissors cuts Paper ";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    pResult.textContent = "You lose! Rock smashes Scissors ";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    pResult.textContent = "You Win! Scissors cuts Paper ";
    humanScore++;
  } else {
    pResult.textContent = "It's a Draw!";
  }

  scores.textContent = `------------ Your score is:  ${humanScore} and Computer score is: ${computerScore} ------------`;

  if (humanScore > 4) {
    winner.textContent = "------------- YOU WIN! ---------------";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore > 4) {
    winner.textContent = "------------- YOU LOSE! --------------";
    humanScore = 0;
    computerScore = 0;
  } else {
    winner.textContent = "------------- NEXT ROUND! --------------";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanSelection = button.getAttribute("data-choice");
    let computerSelection = getComputerChoice();

    spanUser.textContent = `Your move: ${humanSelection} ----`;

    spanComputer.textContent = ` Computer's move: ${computerSelection}`;
    playRound(humanSelection, computerSelection);
  });
});

const container = document.querySelector("#container");
const results = document.createElement("div");

container.appendChild(results);

const moves = document.createElement("div");
results.appendChild(moves);

const spanUser = document.createElement("span");
const spanComputer = document.createElement("span");

moves.appendChild(spanUser);
moves.appendChild(spanComputer);

const pResult = document.createElement("p");

moves.appendChild(pResult);

const scores = document.createElement("p");
moves.appendChild(scores);

const winner = document.createElement("h2");
moves.appendChild(winner);
