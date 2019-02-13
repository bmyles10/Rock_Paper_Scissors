let cpuScore = 0;
let playScore = 0;

let welcomeMessage = () => {
    alert `Welcome to my game of Rock Paper Scissors!, Please click ok to begain and make your choice!`
}

let computerPlay = () => {
    let choice = Math.floor((Math.random() * 3) + 1);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
    return choice;
};

let playerSelection = () => {
    let playerchoice = prompt('What is your choice?');
    return playerchoice.toLowerCase();
}

let playRound = (computerSelection, selection) => {
    if (computerSelection === 'paper' && selection === 'rock') {
        cpuScore++
        alert `You choose '${selection}', the CPU choose ${computerSelection}, you LOSE!`;
        return 2;
    } else if (computerSelection === 'rock' && selection === 'scissors') {
        alert `You choose ${selection}, the CPU choose ${computerSelection}, you LOSE!`;
        return 2;
    } else if (computerSelection === 'scissors' && selection === 'paper') {
        alert `You choose ${selection}, the CPU choose ${computerSelection}, you LOSE!`;
        return 2;
    } else if (selection === 'paper' && computerSelection === 'rock') {
        alert `You choose ${selection}, the CPU choose ${computerSelection}, you WIN!`;
        return 1;
    } else if (selection === 'rock' && computerSelection === 'scissors') {
        alert `You choose ${selection}, the CPU choose ${computerSelection}, you WIN!`;
        return 1;
    } else if (selection === 'scissors' && computerSelection === 'paper') {
        alert `You choose ${selection}, the CPU choose ${computerSelection}, you WIN!`;
        return 1;
    } else if (selection === computerSelection) {
        alert `You both chose ${selection}, TIE!`
    } else {
        alert 'Invalid input, please enter the correct choice.';
        return 0;
    }
}

let updateScores = (result, points) => {
    if (result === 1) {
        playScore += points;
    }
    if (result === 2) {
        cpuScore += points;
    }
    if (result === 0) {
        cpuScore += 0;
        playScore += 0;
    }
}



let game = (numofRounds) => {
    let playa = playerSelection();
    let puter = computerPlay()
    let result = playRound(puter, playa);
    




}

console.log(game());