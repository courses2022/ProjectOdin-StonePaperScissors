//Constants
var ROCK = "rock";
var PAPER = "paper";
var SCISSORS = "scissors";

var DRAW = "draw";
var USER_WIN = "userWin";
var COMPUTER_WIN = "computerWin";
var INVALID_STATUS = "invalidStatus"

console.log("Welcome to Rock Paper Scissors");
console.log("Best of five wins");
let userMove = PAPER;
//userMove = getUserInput();
let computerMove = calculateComputerMove();


function calculateComputerMove() {
    let moves = ["rock", PAPER, "scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

function getUserInput() {
    let userMove = prompt("Whats your move? ");
    userMove =  userMove.trim().toLowerCase();
    if(userMove == "rock" || userMove == PAPER || userMove == "scissors"){
        console.log("Valid move");
        return userMove;
    }else{
        console.log("Invalid move. Try again");
        return getUserInput();
    }   
}

function calculateWhoWon(userMove, computerMove){
    if(userMove == ROCK){
        switch(computerMove){
            case SCISSORS:
                return USER_WIN;
                break;
            case PAPER:
                return COMPUTER_WIN;
                break;
            case ROCK:
                return DRAW;
                    break;
            default:
                return INVALID_STATUS;
            

        }

    }else if(userMove == PAPER){
        switch(computerMove){
            case  ROCK:
            return USER_WIN;
                break;
            case SCISSORS:
            return COMPUTER_WIN;
                break;
            case PAPER:
                return DRAW;
                    break;
            default:
                return INVALID_STATUS;
            

        }
    }else if(userMove == SCISSORS){
        switch(computerMove){
            case PAPER:
            return USER_WIN;
                break;
            case ROCK:
            return COMPUTER_WIN;
                break;
            case SCISSORS:
                return DRAW;
                    break;
            default:
                return INVALID_STATUS;
            

        }
    }else{
        return INVALID_STATUS;
    }
    
}


