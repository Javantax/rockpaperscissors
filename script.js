let humanScore = 0;
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

function playRound(userSelection, computerSelection) {

}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(userSelection, computerSelection);

console.log(getUserChoice());
console.log(getComputerChoice());