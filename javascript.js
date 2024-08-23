
function getComputerChoice(){
  let x = Math.floor(Math.random()*10)%3;
  switch(x){
    case 0 : return "rock";
    case 1 : return "paper";
    case 2 : return "scissors";
  }
}

alert(getComputerChoice());