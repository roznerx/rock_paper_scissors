let playerScore = 0;
let computerScore = 0;

let overallPlayerScore = document.getElementById("overall-player-score");
let overallComputerScore = document.getElementById("overall-computer-score");

overallPlayerScore.value = playerScore;
overallComputerScore.value = computerScore;

let playerInput = document.getElementById("player-input");
let computerInput = document.getElementById("computer-input");

let resultInput = document.getElementById("result-input");
let battleLog = document.getElementById("battle-log");

const computerSelection = computerPlay();
const playerSelection = playerChoice();

function computerPlay() {

    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
};

function playerChoice() {

    let playerSelection = "";

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener("click", () => {
        playerSelection = "rock";
        console.log(playerSelection = "rock");
        playerInput.value = "rock";
        computerInput.value = computerSelection;
        console.log(computerSelection);
    })

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {
        playerSelection = "paper";
        console.log(playerSelection = "paper");
        playerInput.value = "paper";
        computerInput.value = computerSelection;
        console.log(computerSelection);    
    })

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", () => {
        playerSelection = "scissors";
        console.log(playerSelection = "scissors");
        playerInput.value = "scissors";
        computerInput.value = computerSelection;
        console.log(computerSelection);     
    })

    return playerSelection;

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        
        resultInput.value = "Draw!";
        console.log("Draw!");

    } else if (playerSelection === "rock") {

        if (computerSelection === "scissors") {

            battleLog.value = "Rock beats scissors!";
            console.log("Rock beats scissors!");
            playerScore += 1;
            resultInput.value = "Player";

        } else if (computerSelection === "paper") {

            battleLog.value = "Paper beats rock!";
            console.log("Paper beats rock!");
            computerScore += 1;
            resultInput.value = "Computer";      
        }
        
    } else if (playerSelection === "paper") {

        if (computerSelection === "rock") {

            battleLog.value = "Paper beats rock!";
            console.log("Paper beats rock!");
            playerScore += 1;
            resultInput.value = "Player";
        
        } else if (computerSelection === "scissors") {

            battleLog.value = "Scissors beats paper!";
            console.log("Scissors beats paper!");
            computerScore += 1;
            resultInput.value = "Computer";
    
        } 

    } else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {

            battleLog.value = "Scissors beats paper!";
            console.log("Scissors beats paper!");
            playerScore += 1;
            resultInput.value = "Player";

        } else if (computerSelection === "rock") {

            battleLog.value = "Rock beats scissors!";
            console.log("Rock beats scissors!");
            computerScore += 1;
            resultInput.value = "Computer";
        }
    }
}




/*

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

console.log(playRound(playerSelection, computerSelection));
console.log("Player: " + playerScore + " - " + "Computer: " + computerScore);
console.log("Press F5 to play again!");

*/