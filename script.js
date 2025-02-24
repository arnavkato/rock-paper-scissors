function getComputerChoice() {
    const randomInt = Math.random();
    let computerChoice;

    if (randomInt < 1/3) {
        computerChoice = 'Rock';
    }
    else if (randomInt > 2/3) {
        computerChoice = 'Paper';
    }
    else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

console.log(getComputerChoice());