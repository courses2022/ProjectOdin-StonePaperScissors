console.log("Welcome to Rock Paper Scissors");
console.log("Best of five wins");
console.log("Whats your move:");
console.log(computerMove());

function computerMove() {
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

