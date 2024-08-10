let userScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playGame("rock", getComputerChoice()));

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => playGame("paper", getComputerChoice()));

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => playGame("scissors", getComputerChoice()));

const outputDisplay = document.querySelector(".output");
const userScoreDisplay = document.createElement("p");
const computerScoreDisplay = document.createElement("p");

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(userSelection, computerSelection) {
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
    const scores = document.querySelector(".scores");

    userScoreDisplay.textContent = "Your Score: " + userScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;

    scores.appendChild(userScoreDisplay);
    scores.appendChild(computerScoreDisplay);

    outputDisplay.textContent = output;
}

function playGame(userSelection, computerSelection) {
    playRound(userSelection, computerSelection);
    let output;
    if (userScore === 5 || computerScore === 5) {
        if (userScore === computerScore) {
            output = `You both tie with a score of ${userScore} - ${computerScore}`;
        } else if (userScore > computerScore) {
            output = `You won with a score of ${userScore} - ${computerScore}`;
        } else {
            output = `You lose with a score of ${userScore} - ${computerScore}`;
        }
        userScoreDisplay.remove();
        computerScoreDisplay.remove();

        outputDisplay.textContent = output;
        userScore = 0;
        computerScore = 0;
    }
    return output;
}


