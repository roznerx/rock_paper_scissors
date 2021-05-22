let playerScore = 0;
let computerScore = 0;

const computerSelection = computerPlay();
const playerSelection = playerChoice();

function computerPlay() {

    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
};

function playerChoice() {

    let playerChoose = "";
    let playerInput = document.getElementById("player-input");
    let computerInput = document.getElementById("computer-input");

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener("click", () => {
        playerChoose = "rock";
        console.log(playerChoose = "rock");
        playerInput.value = "rock";
        computerInput.value = computerSelection;
        console.log(computerSelection);
    })

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {
        playerChoose = "paper";
        console.log(playerChoose = "paper");
        playerInput.value = "paper";
        computerInput.value = computerSelection;
        console.log(computerSelection);
    })

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", () => {
        playerChoose = "scissors";
        console.log(playerChoose = "scissors");
        playerInput.value = "scissors";
        computerInput.value = computerSelection;
        console.log(computerSelection);
    })  
}

function playRound(playerSelection, computerSelection) {

    let winnerInput = document.getElementById("winner-input");
    let whoBeatsWho = document.getElementById("who-beats-who");

    if (playerSelection === computerSelection) {
        
        winnerInput.value = "Draw!";
        console.log("Draw!");

    } else if (playerSelection === "rock") {

        if (computerSelection === "scissors") {

            whoBeatsWho.value = "Rock beats scissors!";
            console.log("Rock beats scissors!");
            playerScore += 1;
            winnerInput.value = "Player";

        } else if (computerSelection === "paper") {

            whoBeatsWho.value = "Paper beats rock!";
            console.log("Paper beats rock!");
            computerScore += 1;
            winnerInput.value = "Computer";      
        }
        
    } else if (playerSelection === "paper") {

        if (computerSelection === "rock") {

            whoBeatsWho.value = "Paper beats rock!";
            console.log("Paper beats rock!");
            playerScore += 1;
            winnerInput.value = "Player";
        
        } else if (computerSelection === "scissors") {

            whoBeatsWho.value = "Scissors beats paper!";
            console.log("Scissors beats paper!");
            computerScore += 1;
            winnerInput.value = "Computer";
    
        } 

    } else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {

            whoBeatsWho.value = "Scissors beats paper!";
            console.log("Scissors beats paper!");
            playerScore += 1;
            winnerInput.value = "Player";

        } else if (computerSelection === "rock") {

            whoBeatsWho.value = "Rock beats scissors!";
            console.log("Rock beats scissors!");
            computerScore += 1;
            winnerInput.value = "Computer";
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