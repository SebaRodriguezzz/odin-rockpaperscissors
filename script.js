function getComputerChoice() {

    let option1 = "Rock"
    let option2 = "Paper"
    let option3 = "Scissors"
    let current = Math.floor(Math.random() * 3) + 1;

    if (current === 1){
        return option1;
    } else if (current === 2){
        return option2;
    } else {
        return option3;
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();
    if (player !== "rock" && player !== "paper" && player !== "scissors"){
        console.log("Wrong input!");
        return 1;
    }
    let result = ""
    if (computer === "paper") {
        switch(player) {
            case "rock":
                result = "computer";
                console.log("You lose! Paper beats rock.")
                break;
            case "paper":
                result = "tie";
                console.log("Tie!")
                break;
            case "scissors":
                result = "player"
                console.log("You win! Scissors beats paper.")
                break;
        }
    } else if (computer === "rock") {
        switch(player) {
            case "rock":
                result = "tie";
                console.log("Tie!")
                break;
            case "paper":
                result = "player";
                console.log("You win! Paper beats rock.")
                break;
            case "scissors":
                result = "computer"
                console.log("You lose! Rock beats scissors.")
                break;
        }
    } else {
        switch(player) {
            case "rock":
                result = "player";
                console.log("You win! Rock beats scissors.")
                break;
            case "paper":
                result = "computer";
                console.log("You lose! Scissors beats paper.")
                break;
            case "scissors":
                result = "tie"
                console.log("Tie!")
                break;
        }
    }
    return result;
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(prompt("Place your movement! Rock, paper or scissors?"), getComputerChoice());
        if (round === "player" ) {
            playerScore++;
        } else if (round === "computer") {
            computerScore++;
        } else if (round != "tie") {
            console.log("Error!");
            return 1;
        } 
    }
    if (playerScore > computerScore) {
        console.log("You won! Congratulations!");
    } else if (computerScore > playerScore) {
        console.log("You lost! :( Try again");
    } else {
        console.log("That was a tie!");
    }
}