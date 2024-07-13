const forms = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return forms[randomNumber];
}

function getHumanChoice() {
  const answer = prompt("Rock, paper or scissors?").trim().toLowerCase();
  return answer;
}

console.log(getHumanChoice());
