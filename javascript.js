
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
  choice = choice.trim().toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissor") {
    return choice;
  }
  return "not valid "
}

let choice = getHumanChoice();
alert("Player choice was " + choice);