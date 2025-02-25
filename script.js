function getComputerChoice() {
    const randomInt = Math.random();
    let computerChoice;

    if (randomInt < 1/3) {
        computerChoice = 'rock';
    }
    else if (randomInt > 2/3) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";


const humanMoveLog = document.createElement("p");
const computerMoveLog = document.createElement("p");
const humanLabel = document.createElement("p");
const computerLabel = document.createElement("p");

const results = document.createElement("div");
results.append(humanMoveLog, computerMoveLog, humanLabel, computerLabel);

document.body.append(rockButton, paperButton, scissorsButton, results);

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanSelection) {
    const computerChoice = getComputerChoice();

    humanMoveLog.textContent = `your move: ${humanSelection}`
    computerMoveLog.textContent = `computer's move: ${computerChoice}`;

    switch (humanSelection) {
        case "rock":
            switch (computerChoice) {
                case "rock": return "tie";
                case "paper": return "computer";
                case "scissors": return "human";
            }
        case "paper":
            switch (computerChoice) {
                case "rock": return "human";
                case "paper": return "tie";
                case "scissors": return "computer";
            }
        case "scissors":
            switch (computerChoice) {
                case "rock": return "computer";
                case "paper": return "human";
                case "scissors": return "tie";
            }
    }
}

function handleRound(humanSelection) {
    let roundResult = playRound(humanSelection);

    if (humanScore == 5) {
      alert("player wins!");
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
      return;
    } else if (computerScore == 5) {
      alert("computer wins!");
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
      return;
    }

    if (roundResult === "human") {
        humanScore++;
    } else if (roundResult === "computer") {
        computerScore++;
    }

    humanLabel.textContent = `Human: ${humanScore}`;
    computerLabel.textContent = `Computer: ${computerScore}`;
}

function playGame() {
    rockButton.addEventListener("click", () => handleRound("rock"));
    paperButton.addEventListener("click", () => handleRound("paper"));
    scissorsButton.addEventListener("click", () => handleRound("scissors"));
}

playGame();