let playerScore = 0;
let computerScore = 0;

//

function playerChoice() {

    let playerChoose = "";

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener("click", () => {
        playerChoose = "rock";
        console.log(playerChoose = "rock");
    })

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {
        playerChoose = "paper";
        console.log(playerChoose = "paper");
    })

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", () => {
        playerChoose = "scissors";
        console.log(playerChoose = "scissors");
    })  
}

const playerSelection = playerChoice();

if (playerSelection === "rock"||"paper"||"scissors") {
    document.getElementById("playerInput").value = playerSelection;
    console.log(playerSelection);
}


//



function computerPlay() {

    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
};

const computerSelection = computerPlay();

/*

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

*/