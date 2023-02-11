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
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player !== "rock" && player !== "paper" && player !== "scissors"){
        console.log("Wrong input!");
        return 1;
    }

    if (computer === "paper") {
        switch(player) {
            case "rock":
                console.log("You lose! Paper beats rock.");
                return "computer";
            case "paper":
                console.log("Tie!");
                return "tie";
            case "scissors":
                console.log("You win! Scissors beats paper.");
                return "player"
        }
    } else if (computer === "rock") {
        switch(player) {
            case "rock":
                console.log("Tie!");
                return "tie";
            case "paper":
                console.log("You win! Paper beats rock.");
                return "player"
            case "scissors":
                console.log("You lose! Rock beats scissors.");
                return "computer";
        }
    } else {
        switch(player) {
            case "rock":
                console.log("You win! Rock beats scissors.");
                return "player"
            case "paper":
                console.log("You lose! Scissors beats paper.");
                return "computer";
            case "scissors":
                console.log("Tie!");
                return "tie";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
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