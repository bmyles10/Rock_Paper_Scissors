let cpuScore = 0;
let playScore = 0;

let welcomeMessage = () => {
    alert `Welcome to my game of Rock Paper Scissors! Please click ok to begain and make your choice!`
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
        alert ("You choose rock, the CPU choose paper, you LOSE! Score is: You " + playScore + " CPU " + cpuScore);
        return 2;
    } else if (computerSelection === 'rock' && selection === 'scissors') {
        alert ("You choose scissors, the CPU choose rock, you LOSE! Score is: You " + playScore + " CPU " + cpuScore);
        return 2;
    } else if (computerSelection === 'scissors' && selection === 'paper') {
        alert("You choose paper, the CPU choose scissors, you LOSE! Score is: You " + playScore + " CPU " + cpuScore);
        return 2;
    } else if (selection === 'paper' && computerSelection === 'rock') {
        alert ("You choose rock, the CPU choose paper, you WIN! Score is: You " + playScore + " CPU " + cpuScore);
        return 1;
    } else if (selection === 'rock' && computerSelection === 'scissors') {
        alert ("You choose rock, the CPU choose scissors, you WIN! Score is: You " + playScore + " CPU " + cpuScore);
        return 1;
    } else if (selection === 'scissors' && computerSelection === 'paper') {
        alert ("You choose scissors, the CPU choose paper, you WIN! Score is: You " + playScore + " CPU " + cpuScore);
        return 1;
    } else if (selection === computerSelection) {
        alert("TIE! Score is: You " + playScore + " CPU " + cpuScore);
        return 0;
    } else {
        alert("Invalid response, please enter again.");
        return 0;

    }
};

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

let clearGame = () => {
    let cpuScore = 0;
    let playScore = 0;
}



let game = (numofRounds) => {
    welcomeMessage();
    do {
        let playa = playerSelection();
        let puter = computerPlay()
        let result = playRound(puter, playa);
        updateScores(result, 1);
        if (result != 0) {
            numofRounds--;
        }
    } while (numofRounds > 0);

    if (playScore > cpuScore) {
        alert("You scored " + playScore + " and the CPU scored " + cpuScore + ", you win boiiii!!!!")
    } else {
        alert("The CPU scored " + cpuScore + " and you scored " + playScore + ", you lose MF.")
    };

    clearGame();
}

game(5);