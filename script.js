const playerScoreDiv = document.getElementById("player-score");
const computerScoreDiv = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");
const playAgainBtn = document.getElementById("playAgainBtn");

function getComputerChoice() {
    const possibilities = ["ROCK","PAPER","SCISSORS"];
    let computer_choice = possibilities[Math.floor(Math.random()*possibilities.length)];
    return computer_choice
}

function playRound(playerSelection) {
    let computerChoice = getComputerChoice();
    computerChoice = computerChoice.toUpperCase();
    if (playerSelection === "ROCK") {
        switch (computerChoice) {
            case "ROCK":
                resultDiv.textContent = "Tie round";             
                break;
            case "PAPER":
                computerWins++
                computerScoreDiv.textContent = `Computer score: ${computerWins}`
                resultDiv.textContent = "You lost a round";              
                break;
            case "SCISSORS":
                playerWins++
                playerScoreDiv.textContent = `Player score: ${playerWins}`
                resultDiv.textContent = "You won a round";              
                break;
        }
    } else if (playerSelection === "PAPER") {
        switch (computerChoice) {
            case "ROCK":
                playerWins++
                playerScoreDiv.textContent = `Player score: ${playerWins}`
                resultDiv.textContent = "You won a round";             
                break;
            case "PAPER":
                resultDiv.textContent = "Tie round";              
                break;
            case "SCISSORS":
                computerWins++
                computerScoreDiv.textContent = `Computer score: ${computerWins}`
                resultDiv.textContent = "You lost a round";             
                break;
        }

    } else if (playerSelection === "SCISSORS") {
        switch (computerChoice) {
            case "ROCK":
                computerWins++
                computerScoreDiv.textContent = `Computer score: ${computerWins}`
                resultDiv.textContent = "You lost a round";              
                break;
            case "PAPER":
                playerWins++
                playerScoreDiv.textContent = `Player score: ${playerWins}`
                resultDiv.textContent = "You won a round";               
                break;
            case "SCISSORS":
                resultDiv.textContent = "Tie round";               
                break;
        }
    }
}

/* playing game with ui feature below */
let computerWins = 0;
let playerWins = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id.toUpperCase();
  
        playRound(playerSelection);

        if (playerWins === 5) {
            resultDiv.textContent = "You won a game!!!";
            switchButtons("OFF");
            playAgainBtn.style.display = "block";
        } else if (computerWins === 5) {
            resultDiv.textContent = "You lost a game!";
            switchButtons("OFF");
            playAgainBtn.style.display = "block";
        }
    });
});

function resetScore () {
    computerWins = 0;
    playerWins = 0;
    computerScoreDiv.textContent = `Computer score: ${computerWins}`
    playerScoreDiv.textContent = `Player score: ${playerWins}`
    switchButtons();
    resultDiv.textContent = "";
    playAgainBtn.style.display = "none";
}

function switchButtons(Boolean) {
    buttons.forEach((button) => {
        if (Boolean) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }        
    })
}