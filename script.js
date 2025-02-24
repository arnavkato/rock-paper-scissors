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

function getHumanChoice() {
    let humanChoice = prompt('Type rock paper or scissors');
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
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
                    computerScorecore++;
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
}


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);













