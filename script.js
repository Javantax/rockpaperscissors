let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let move;
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            move = "rock";
            break;
        case 1:
            move = "paper";
            break;
        case 2:
            move = "scissors";
            break;
    }
    return move;
}

function getUserChoice() {
    let move = prompt("Enter your move?", "");
    return move.toLowerCase();
}

const userSelection = "";
const computerSelection = "";

function playRound(userSelection, computerSelection) {
    userSelection = getUserChoice();
    computerSelection = getComputerChoice();
    let output;
    if (userSelection === computerSelection) {
        output = `Its a tie! Both chose ${userSelection}`;
    } else if (userSelection === "rock" && computerSelection === "scissors" ||
        userSelection === "paper" && computerSelection === "rock" ||
        userSelection === "scissors" && computerSelection === "paper") {
        output = `You win! ${userSelection} beats ${computerSelection}`;
        userScore++;
    } else {
        output = `You lose! ${computerSelection} beats ${userSelection}`;
        computerScore++;
    }
    return output;
}

/*function playGame() {
    let output;
    for (let i = 0 ; i < 5; i++) {
        console.log(playRound(userSelection, computerSelection));
    }
    if (userScore === computerScore) {
        output = `You both tie with a score of ${userScore} - ${computerScore}`;
    } else if (userScore > computerScore) {
        output = `You won with a score of ${userScore} - ${computerScore}`;
    } else {
        output = `You lose with a score of ${userScore} - ${computerScore}`;
    }

    return output;
}*/

console.log(playRound());
