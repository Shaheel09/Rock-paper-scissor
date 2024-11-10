
let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getHumanChoice() {
    let input = prompt("Choose 'rock' , 'paper' or 'scissors'").toLowerCase();
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        console.log( `It's a tie, You both choose the same.`);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;

    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else {
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame(){
    playRound()
    
    for (let i = 0; i < 4; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("Congratulations, You won the game against computer!");
    } else if (computerScore> humanScore){
        console.log("Sorry! You lost the game against computer!");
    }
    else{
        console.log("Your game tied against the computer");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame(humanSelection, computerSelection);