function getComputerChoice() {

    let option1 = "Rock"
    let option2 = "Paper"
    let option3 = "Scissors"
    let current = Math.floor(Math.random() * 3) + 1;

    if (current === 1) {
        return option1;
    } else if (current === 2) {
        return option2;
    } else {
        return option3;
    }
}

function playRound(playerSelection, computerSelection) {

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    const result = document.createElement('div');

    if (player !== "rock" && player !== "paper" && player !== "scissors") {
        result.textContent = "Wrong input!";
        return 1;
    }
    if (computer === "paper") {
        switch (player) {
            case "rock":
                result.textContent = "You lose! Paper beats rock.";
                winner = "computer";
                break;
            case "paper":
                result.textContent = "Tie!";
                winner = "tie";
                break;
            case "scissors":
                result.textContent = "You win! Scissors beats paper.";
                winner = "player"
                break;
        }
    } else if (computer === "rock") {
        switch (player) {
            case "rock":
                result.textContent = "Tie!";
                winner = "tie";
                break;
            case "paper":
                result.textContent = "You win! Paper beats rock.";
                winner = "player"
                break;
            case "scissors":
                result.textContent = "You lose! Rock beats scissors.";
                winner = "computer";
                break;
        }
    } else {
        switch (player) {
            case "rock":
                result.textContent = "You win! Rock beats scissors.";
                winner = "player"
                break;
            case "paper":
                result.textContent = "You lose! Scissors beats paper.";
                winner = "computer";
                break;
            case "scissors":
                result.textContent = "Tie!";
                winner = "tie";
                break;
        }
    }
    document.body.appendChild(result);
    return winner;
}

const buttonSelect = document.querySelector('.options');
const score = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

buttonSelect.addEventListener('click', handlePoints);


function handlePoints(e){
    let roundWinner = '';
    roundWinner = playRound(e.target.className, getComputerChoice());
    if (roundWinner === "player"){
        playerScore++;
    } else if (roundWinner === "computer"){
        computerScore++;
    }
    score.textContent = "Player score: " + playerScore + " | Computer score: " + computerScore;
    
    checkScore(playerScore, computerScore);

}

function checkScore(playerScore, computerScore){
    const result = document.createElement('div');
    const restart = document.createElement('button');
    if (playerScore === 5){
        result.textContent = "GAME OVER! \n\nYou won! Congratulations! :D";
        restart.textContent = "Restart game";
        document.body.appendChild(result);
        document.body.appendChild(restart);
        restart.addEventListener('click', () => {location.reload()});
        removeEventListener();
    } else if (computerScore === 5){
        result.textContent = "GAME OVER! \n\nYou lose :( Better luck next time!";
        restart.textContent = "Restart game";
        document.body.appendChild(result);
        document.body.appendChild(restart);
        restart.addEventListener('click', () => {location.reload()});
        removeEventListener();
    }
}

function removeEventListener(){
    buttonSelect.removeEventListener('click', handlePoints);
}