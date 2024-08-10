let userScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(userSelection, computerSelection) {
    console.log(userSelection);
    console.log(computerSelection);
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
    console.log(output);
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

//console.log(playRound());
