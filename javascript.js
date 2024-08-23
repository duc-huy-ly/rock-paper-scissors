
function getComputerChoice(){
  let x = Math.floor(Math.random()*10)%3;
  switch(x){
    case 0 : return "rock";
    case 1 : return "paper";
    case 2 : return "scissor";
  }
}

function getHumanChoice(){
  var choice = prompt("rock, paper, scissor ?");
  if (choice == null) return null;
  choice = choice.trim().toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissor") {
    return choice;
  }
  return "not valid "
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("Draw")
          break;
        case "paper":
          console.log("You lose ! Paper beats rock");
          computerScore++;
          break;
        case "scissor":
          console.log("You win! Rock beats scissor");
          humanScore++;
          break;
        default:
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You win! Paper beats rock");
          humanScore++;
          break;
        case "paper":
          console.log("Draw");
          break;
        case "scissor":
          console.log("You lose ! Scissor beats paper");
          computerScore++;
          break;
        default:
          break;
      }
      case "scissor":
        switch (computerChoice) {
          case "rock":
            console.log("You lose ! Rock beats scissor");
            computerScore++;
            break;
          case "paper":
            console.log("You win ! Paper beats rock");
            humanScore++
            break;
          case "scissor":
            console.log("Draw");
            break;
          default:
            break;
        }
    default:
      break;
  }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
