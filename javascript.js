// Initialisation :

var humanScore = 0;
var computerScore = 0;

let humScoreSelector = document.querySelector("#humScore");
let comScoreSelector = document.querySelector("#comScore");
let message = document.querySelector("#result");
let playerChoiceDiv = document.querySelector('#yourChoice');
let computerChoiceDiv = document.querySelector('#computersChoice');

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissor";
  }
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      playerChoiceDiv.textContent = "rock";
      switch (computerChoice) {
        case "rock":
          computerChoiceDiv.textContent = "rock";
          message.textContent = "Draw"
          break;
        case "paper":
          computerChoiceDiv.textContent = "paper";
          message.textContent = "You lose !";
          computerScore++;
          break;
        case "scissor":
          computerChoiceDiv.textContent = "scissor";
          message.textContent = "You win!";
          humanScore++;
          break;
        default:
          break;
      }
      break;
    case "paper":
      playerChoiceDiv.textContent = "paper";
      switch (computerChoice) {
        case "rock":
          computerChoiceDiv.textContent = "rock";
          message.textContent = "You win!";
          humanScore++;
          break;
        case "paper":
          computerChoiceDiv.textContent = "paper";
          message.textContent = "Draw";
          break;
        case "scissor":
          computerChoiceDiv.textContent = "scissor";
          message.textContent = "You lose !";
          computerScore++;
          break;
        default:
          break;
      }
      break;
    case "scissor":
      playerChoiceDiv.textContent = "scissor";
      switch (computerChoice) {
        case "rock":
          computerChoiceDiv.textContent = "rock";
          message.textContent = "You lose !";
          computerScore++;
          break;
        case "paper":
          computerChoiceDiv.textContent = "paper";
          message.textContent = "You win !";
          humanScore++
          break;
        case "scissor":
          computerChoiceDiv.textContent = "scissor";
          message.textContent = "Draw";
          break;
        default:
          break;
      }
    default:
      break;
  }
}

function updateDisplay(){
  humScoreSelector.textContent = humanScore;
  comScoreSelector.textContent = computerScore;
}

let choices = document.querySelector('#choices');
choices.addEventListener('click', (e) => {
  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  updateDisplay();
})


