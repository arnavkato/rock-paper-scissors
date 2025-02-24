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

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

    for(let i=0; i<5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore);
        console.log(`current scores: you: ${humanScore}, computer: ${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log('you beat the computer!');
    }
    else if (humanScore === computerScore) {
        console.log('you tied the computer!');
    }
    else {
        console.log('you lost to the computer!');
    }
}

playGame();













