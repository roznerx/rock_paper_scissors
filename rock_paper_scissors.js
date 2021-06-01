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

        if (playerSelection === computerSelection) {
        
            battleLog.value = "Crack!";
            resultInput.value = "Draw!";
            console.log("Draw!");
    
        } else if (computerSelection === "scissors") {

            battleLog.value = "Rock beats scissors!";
            console.log("Rock beats scissors!");
            overallPlayerScore.value += 1;
            resultInput.value = "Player";

        } else if (computerSelection === "paper") {

            battleLog.value = "Paper beats rock!";
            console.log("Paper beats rock!");
            overallComputerScore.value += 1;
            resultInput.value = "Computer";      
        }
    })

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {
        playerSelection = "paper";
        console.log(playerSelection = "paper");
        playerInput.value = "paper";
        computerInput.value = computerSelection;
        console.log(computerSelection);

        if (playerSelection === computerSelection) {
        
            battleLog.value = "Whoosh!";
            resultInput.value = "Draw!";
            console.log("Draw!");
    
        } else if (computerSelection === "rock") {

            battleLog.value = "Paper beats rock!";
            console.log("Paper beats rock!");
            overallPlayerScore.value += 1;
            resultInput.value = "Player";
        
        } else if (computerSelection === "scissors") {

            battleLog.value = "Scissors beats paper!";
            console.log("Scissors beats paper!");
            overallComputerScore.value += 1;
            resultInput.value = "Computer";
    
        }     
    })

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", () => {
        playerSelection = "scissors";
        console.log(playerSelection = "scissors");
        playerInput.value = "scissors";
        computerInput.value = computerSelection;
        console.log(computerSelection);

        if (playerSelection === computerSelection) {
        
            battleLog.value = "Clang!";
            resultInput.value = "Draw!";
            console.log("Draw!");
    
        } else if (computerSelection === "paper") {

            battleLog.value = "Scissors beats paper!";
            console.log("Scissors beats paper!");
            overallPlayerScore.value += 1;
            resultInput.value = "Player";

        } else if (computerSelection === "rock") {

            battleLog.value = "Rock beats scissors!";
            console.log("Rock beats scissors!");
            overallComputerScore.value += 1;
            resultInput.value = "Computer";
        }     
    })
}

if (resultInput.value = "Draw!"||"Player"||"Computer") {

    while (playerScore < 5 && computerScore < 5) {
        let newPlayerChoice = playerChoice();
        let newComputerPlay = computerPlay();
        //playRound(newPlayerChoice, newComputerPlay);
        if (playerScore = 5 && computerScore < playerScore) {
            prompt("Player victorious! Machine is crushed!");
            console.log("Player victorious! Machine is crushed!");
        } else if (computerScore = 5 && playerScore < computerScore) {
            prompt("Game over! Kneel before me, you filthy human!");
            console.log("Game over! Kneel before me, you filthy human!");
        }
        break
    } 


}

/*
function playRound(playerSelection, computerSelection) {

}

*/


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