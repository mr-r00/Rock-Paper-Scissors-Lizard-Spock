const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn() {

    const randNum = Math.floor(Math.random() * 5) + 1;

    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
        case 4:
            computer = "LIZARD";
            break;
        case 5:
            computer = "SPOCK";
            break;
    }
}
function checkWinner() {
    if (player == computer) {
        return "Draw!";
    }
    else if (computer == "ROCK") {
        return (player == "PAPER" || player == "SPOCK") ? "You Win!" : "You Lose!";
    }
    else if (computer == "PAPER") {
        return (player == "SCISSORS" || player == "Lizard") ? "You Win!" : "You Lose!";
    }
    else if (computer == "SCISSORS") {
        return (player == "ROCK" || player == "SPOCK") ? "You Win!" : "You Lose!";
    }
    else if (computer == "LIZARD") {
        return (player == "SCISSORS" || player == "ROCK") ? "You Win!" : "You Lose!";
    }
    else if (computer == "SPOCK") {
        return (player == "LIZARD" || player == "PAPER") ? "You Win!" : "You Lose!";
    }
}