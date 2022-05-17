//Constants
var ROCK = "rock";
var PAPER = "paper";
var SCISSORS = "scissors";

var DRAW = "draw";
var USER_WIN = "userWin";
var COMPUTER_WIN = "computerWin";
var INVALID_STATUS = "invalidStatus";

var UserScore = 0;
var ComputerScore = 0;

console.log("Welcome to Rock Paper Scissors");
console.log("Best of five wins");

//for (let gameNum = 1; gameNum <= 5; gameNum++) {
//    playRound();
        
//}

console.log("GAME RESULT:");

if(UserScore> ComputerScore){console.log("You won the game");}
else if (ComputerScore > UserScore){console.log("Computer won the game");}
else{console.log("Its a draw!");}


function calculateComputerMove() {
    let moves = ["rock", PAPER, "scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

function getUserInput() {
    let userMove = prompt("Whats your move? ");
    userMove =  userMove.trim().toLowerCase();
    if(userMove == "rock" || userMove == PAPER || userMove == "scissors"){
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

function playRound(userMove){
    let computerMove = calculateComputerMove();
    let roundWinner = calculateWhoWon(userMove, computerMove);

    console.log(userMove +" VS "+computerMove)

    if(roundWinner == USER_WIN){
        console.log("You won");
        UserScore+=1;
    }else if(roundWinner == COMPUTER_WIN){
        console.log("Computer won");
        ComputerScore+=1;
    }else{
        console.log("Its a draw");
    }

}


//UI Methods
function updateScores(){
    const scores = document.querySelector('.currentScore');
    scores.innerHTML = UserScore +' - '+ ComputerScore;
}

// Add event listeners
const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener('click', function(e){
    UserScore = 0;
    ComputerScore = 0;

    updateScores();
});

const moves = document.querySelectorAll('.movebutton');
moves.forEach((move) => {
    move.addEventListener('click', (e)=> {
        playRound(e.target.dataset.move);
        updateScores();
    });
});