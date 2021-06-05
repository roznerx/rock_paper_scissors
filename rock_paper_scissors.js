let overallPlayerScore = document.getElementById("overall-player-score");
let overallComputerScore = document.getElementById("overall-computer-score");

overallPlayerScore.value = 0;
overallComputerScore.value = 0;

let playerInput = document.getElementById("player-input");
let computerInput = document.getElementById("computer-input");

let resultInput = document.getElementById("result-input");
let battleLog = document.getElementById("battle-log");

function computerPlay() {

    debugger;

    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
}

//let computerSelection = computerPlay();

let playerSelection = playerChoice();

function fiveRounds() {

    
    if (overallPlayerScore.value == 5 && overallComputerScore.value < overallPlayerScore.value) {
        alert("Player victorious! Machine is crushed!");
        console.log("Player victorious! Machine is crushed!");
    } else if (overallComputerScore.value == 5 && overallPlayerScore.value < overallComputerScore.value) {
        alert("Game over! Kneel before me, you filthy human!");
        console.log("Game over! Kneel before me, you filthy human!");
    }
}

function playerChoice() {
    const rockBtn = document.querySelector("#rock");
        rockBtn.addEventListener("click", () => {
            debugger;

            playerSelection = "rock";
            console.log("rock");
            playerInput.value = "rock";
            let computerSelection = computerPlay();
            computerInput.value = computerSelection
            console.log(computerInput.value);
            

            if (playerSelection === computerSelection) {
            
                battleLog.value = "Crack!";
                console.log("Draw!");
                resultInput.value = "Draw!";

        
            } else if (computerSelection === "scissors") {

                battleLog.value = "Rock beats scissors!";
                console.log("Rock beats scissors!");
                overallPlayerScore.value = parseInt(overallPlayerScore.value) + parseInt(1);
                resultInput.value = "Player";

            } else if (computerSelection === "paper") {

                battleLog.value = "Paper beats rock!";
                console.log("Paper beats rock!");
                overallComputerScore.value = parseInt(overallComputerScore.value) + parseInt(1);
                resultInput.value = "Computer";      
            }

            fiveRounds();
            
        })

        const paperBtn = document.querySelector("#paper");
        paperBtn.addEventListener("click", () => {
            debugger;

            playerSelection = "paper";
            console.log(playerSelection = "paper");
            playerInput.value = "paper";
            let computerSelection = computerPlay();
            computerInput.value = computerSelection;
            console.log(computerSelection);

            if (playerSelection === computerSelection) {
            
                battleLog.value = "Whoosh!";
                console.log("Draw!");
                resultInput.value = "Draw!";
        
            } else if (computerSelection === "rock") {

                battleLog.value = "Paper beats rock!";
                console.log("Paper beats rock!");
                overallPlayerScore.value = parseInt(overallPlayerScore.value) + parseInt(1)
                resultInput.value = "Player";
            
            } else if (computerSelection === "scissors") {

                battleLog.value = "Scissors beats paper!";
                console.log("Scissors beats paper!");
                overallComputerScore.value = parseInt(overallComputerScore.value) + parseInt(1);
                resultInput.value = "Computer";
        
            }     

            fiveRounds();
        })

        const scissorsBtn = document.querySelector("#scissors");
        scissorsBtn.addEventListener("click", () => {
            debugger;

            playerSelection = "scissors";
            console.log(playerSelection = "scissors");
            playerInput.value = "scissors";
            let computerSelection = computerPlay();
            computerInput.value = computerSelection;
            console.log(computerSelection);

            if (playerSelection === computerSelection) {
            
                battleLog.value = "Clang!";
                console.log("Draw!");
                resultInput.value = "Draw!";
        
            } else if (computerSelection === "paper") {

                battleLog.value = "Scissors beats paper!";
                console.log("Scissors beats paper!");
                overallPlayerScore.value = parseInt(overallPlayerScore.value) + parseInt(1)
                resultInput.value = "Player";
                


            } else if (computerSelection === "rock") {

                battleLog.value = "Rock beats scissors!";
                console.log("Rock beats scissors!");
                overallComputerScore.value = parseInt(overallComputerScore.value) + parseInt(1);
                resultInput.value = "Computer";
                
            }     

            fiveRounds();
        })

    

}




/* 

function newRound(newComputerPlay, newPlayerChoice) {

    newComputerPlay = computerSelection;
    newPlayerChoice = playerSelection;

    return newPlayerChoice;
} 

*/ 

/*
if (resultInput.value = "Draw!"||"Player"||"Computer") {

    while (overallPlayerScore < parseInt(5) && overallComputerScore < parseInt(5)) {
        let newPlayerChoice = playerChoice();
        let newComputerPlay = computerPlay();
        /playRound(newPlayerChoice, newComputerPlay);
        if (overallPlayerScore = 5 && overallComputerScore < overallPlayerScore) {
            prompt("Player victorious! Machine is crushed!");
            console.log("Player victorious! Machine is crushed!");
        } else if (overallComputerScore = 5 && overallPlayerScore < overallComputerScore) {
            prompt("Game over! Kneel before me, you filthy human!");
            console.log("Game over! Kneel before me, you filthy human!");
        }
        break
    } 
}

*/