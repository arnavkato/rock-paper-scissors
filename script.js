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
                case 'paper':
                    console.log('computer wins');
                    computerScore++;
                case 'scissors':
                    console.log('you win');
                    humanScore++;
            }
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    console.log('you win');
                    humanScore++;
                case 'paper':
                    console.log('tie');
                case 'scissors':
                    console.log('computer wins');
                    computerScore++;
            }
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    console.log('computer wins');
                    computerScorecore++;
                case 'paper':
                    console.log('you win');
                    humanScore++;
                case 'scissors':
                    console.log('tie');
            }

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














//debugging
console.log(getComputerChoice());
console.log(getHumanChoice());