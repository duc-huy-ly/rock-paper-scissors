
function getComputerChoice(){
  let x = Math.floor(Math.random()*10)%3;
  switch(x){
    case 0 : return "rock";
    case 1 : return "paper";
    case 2 : return "scissors";
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

let choice = getHumanChoice();
alert("Player choice was " + choice);