//0.Initial scores

let playerScore = 0;
let computerScore = 0;


//1.Player and Computer choices

//1.1.Player's choices

function playerChoice() {

    //let playerChoice = prompt("Pick your weapon!");

    if (playerChoice.toLowerCase() === "rock"||"paper"||"scissors") {
        //return playerChoice.toLowerCase();
    } else {
        //return console.log("Invalid input! Please select 'rock', 'paper' or 'scissors'!");
    }
};

const playerSelection = playerChoice();

//1.2.Computer's choices

function computerPlay() {

    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
};

const computerSelection = computerPlay();

//2.Round boolean

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);

    let winMessage = "You win!";
    let loseMessage = "You lose!";
    let drawMessage = "Draw!";

    let rockBeats = " Rock beats scissors!";
    let paperBeats = " Paper beats rock!";
    let scissorsBeat = " Scissors beats paper!";

    let winner = "";

    if (playerSelection === computerSelection) {
        console.log(drawMessage);
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log(winMessage + rockBeats);
            playerScore += 1;
            winner = "Player";
        } else if (computerSelection === "paper") {
            console.log(loseMessage + paperBeats);
            computerScore += 1;
            winner = "Computer";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log(winMessage + paperBeats);
            playerScore += 1;
            winner = "Player";
        } else if (computerSelection === "scissors") {
            console.log(loseMessage + scissorsBeat);
            computerScore += 1;
            winner = "Computer";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log(winMessage + scissorsBeat);
            playerScore += 1;
            winner = "Player";
        } else if (computerSelection === "rock") {
            console.log(loseMessage + rockBeats);
            computerScore += 1;
            winner = "Computer";
        }
    } 

        if (winner = "Player"||"Computer") {
            console.log("Player: " + playerScore + " - " + "Computer: " + computerScore);
            while (playerScore < 5 && computerScore < 5) {
                let newPlayerChoice = playerChoice();
                let newComputerPlay = computerPlay();
                playRound(newPlayerChoice, newComputerPlay);
                if (playerScore = 5 && computerScore < playerScore) {
                    console.log("Player victorious! Machine is crushed!");
                } else if (computerScore = 5 && playerScore < computerScore) {
                    console.log("Game over! Kneel before me, you filthy human!");
                }
                break
            } 
        }
}

console.log(playRound(playerSelection, computerSelection));
console.log("Player: " + playerScore + " - " + "Computer: " + computerScore);
console.log("Press F5 to play again!");

/*

Some notes regarding the current version!!!

-Game is up and running!

-Couple of things to fix:

1) When the game ends, console displays console.log as "undefined" and "Player: true - Computer: false" strings.
2) When the prompt happens at the beginning of rounds after the 1st one, no "Invalid input!" message happens.

*/