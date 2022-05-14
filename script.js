console.log("Welcome to Rock Paper Scissors");
console.log("Best of five wins");
var userMove = "paper";
//userMove = getUserInput();

console.log(computerMove());

function computerMove() {
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

function getUserInput() {
    let userMove = prompt("Whats your move? ");
    userMove =  userMove.trim().toLowerCase();
    if(userMove == "rock" || userMove == "paper" || userMove == "scissors"){
        console.log("Valid move");
        return userMove;
    }else{
        console.log("Invalid move. Try again");
        return getUserInput();
    }   
}


