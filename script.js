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


/*function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    console.log('tie');
                    break;
                case 'paper':
                    console.log('computer wins');
                    computerScore++;
                    break;
                case 'scissors':
                    console.log('you win');
                    humanScore++;
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    console.log('you win');
                    humanScore++;
                    break;
                case 'paper':
                    console.log('tie');
                    break;
                case 'scissors':
                    console.log('computer wins');
                    computerScore++;
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    console.log('computer wins');
                    computerScore++;
                    break;
                case 'paper':
                    console.log('you win');
                    humanScore++;
                    break;
                case 'scissors':
                    console.log('tie');
                    break;
            }
            break;
    }

    console.log(
      `Your choice: ${humanChoice}, computer's choice: ${computerChoice}`
    );
    return [humanScore, computerScore];
}
    */
/*
function playGame() {
    const humanScore = document.createElement("span");
    const computerScore = document.createElement("span");

    let computerSelection = getComputerChoice();
        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore);
        console.log(`current scores: you: ${humanScore}, computer: ${computerScore}`);
    
    if (
      humanScore.textContent.parseInt() > computerScore.textContent.parseInt()
    ) {
      console.log("you beat the computer!");
    } else if (
      humanScore.textContent.parseInt() === computerScore.textContent.parseInt()
    ) {
      console.log("you tied the computer!");
    } else {
      console.log("you lost to the computer!");
    }
}
*/








function playRound(humanSelection) {
    const computerChoice = getComputerChoice();
    const humanChoice = humanSelection;

    switch (humanChoice) {
      case "rock":
        switch (computerChoice) {
          case "rock":
            return "tie";
          case "paper":
            return "computer";
          case "scissors":
            return "human";
        }
      case "paper":
        switch (computerChoice) {
          case "rock":
            return "human";
          case "paper":
            return "tie";
          case "scissors":
            return "computer";
        }
      case "scissors":
        switch (computerChoice) {
          case "rock":
            return "computer";
          case "paper":
            return "human";
          case "scissors":
            return "tie";
        }
    }
}




function playGame() {

    const container = document.querySelector("body");

    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorsButton = document.createElement("button");

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    const humanLabel = document.createElement("p");
    const computerLabel = document.createElement("p");

    const results = document.createElement("div");

    results.append(humanLabel, computerLabel);

    let roundResult;

    rockButton.addEventListener("click", () => roundResult = playRound("rock"));
    paperButton.addEventListener("click", () => roundResult = playRound("paper"));
    scissorsButton.addEventListener("click", () => roundResult = playRound("scissors"));

    container.append(rockButton, paperButton, scissorsButton, results);

    let humanScore = 0;
    let computerScore = 0;

    switch (roundResult) {
        case "human":
            humanScore++;
            break;
        case "computer":
            computerScore++;
            break;
    }

    humanLabel.textContent = `human: ${humanScore}`;
    computerLabel.textContent = `computer: ${computerScore}`;
}

playGame();