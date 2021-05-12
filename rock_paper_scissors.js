//0.Initial scores

let playerScore = 0;
let computerScore = 0;

//1.Player and Computer choices

//1.1.Player's choices

function playerChoice() {

    let playerChoice = prompt("Pick your weapon!");

    if (playerChoice.toLowerCase() === "rock"|"paper"|"scissors") {
        return playerChoice.toLowerCase();
    } else {
        return "Invalid input! Please select 'rock', 'paper' or 'scissors'!";
    }
};

//1.2.Computer's choices

function computerPlay(){

    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
};

//2.Round boolean

const playerSelection = playerChoice();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);

    let winMessage = "You win!";
    let loseMessage = "You lose!";
    let drawMessage = "Draw!";

    if (playerSelection === computerSelection) {
        return drawMessage;
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return winMessage + " Rock beats scissors!";         
        } else if (computerSelection === "paper") {
            return loseMessage + " Paper beats rock!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            returnwinMessage + " Paper beats rock!";
        } else if (computerSelection === "scissors") {
            return loseMessage + " Scissors beats paper!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return winMessage + " Scissors beats paper!";
        } else if (computerSelection === "rock") {
            return loseMessage + " Rock beats scissors!";
        }
    }    

    if (winMessage = true) {
        return playerScore + 1;
    } else if (loseMessage = true) {
        return computerScore + 1;
    }
}

console.log(playRound(playerSelection, computerSelection));
console.log("Player: " + playerScore + " - " + "Computer: " + computerScore);


/*

function gameLoop(playerScore, computerScore) {

    const gameRound = playRound(playerSelection, computerSelection);

    while (playerScore < 5 && computerScore < 5) {
        gameRound++;
        if (playerScore = 5) {
            return "You win! Man beats machine!"  
        } else if (computerScore = 5) {
            return "You lose! Pathetic human!"
        }
    }
}

should use previous functions inside this one to play a game of 5 rounds
should keep score and report a winner or loser at the end
should looop playround function 5 times in a row
should use console.log() to display results of each round and winner at the end
    

*/