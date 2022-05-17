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
    var roundStatus = calculateWhoWon(userMove, computerMove);
    updateGameResult(userMove, computerMove, roundStatus);


}

function updateGameResult(userMove, computerMove, roundStatus){
    var userOutput = document.querySelector('.userMove');
    userOutput.src="./images/"+userMove+".png";

    var computerOutput = document.querySelector('.computerMove');
    computerOutput.src = "./images/"+computerMove+".png";

    setTimeout(function(){
        if(roundStatus == COMPUTER_WIN){
            userOutput.src="./images/"+userMove+".png";
        }
            
    }, 500);
}


//UI Methods
function updateScores(){
    const scores = document.querySelector('.currentScore');
    scores.innerHTML = UserScore +' - '+ ComputerScore;
}

function endGame(won){
    const controls = document.querySelector("#controls");
    const finalResult = document.querySelector("#finalResult");

    controls.classList.remove('showSection');
    controls.classList.add('hideSection');
    finalResult.classList.remove('hideSection');

    if(won){
        finalResult.innerHTML = "<h2>Congratulations you won the game!!</h2>";
    }
    else{
        finalResult.innerHTML = "<h2>Sorry, this time you lost</h2>";
    }


}

// Add event listeners
const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener('click', function(e){
    UserScore = 0;
    ComputerScore = 0;
    updateScores();

    controls.classList.add('showSection');
    controls.classList.remove('hideSection');
    finalResult.classList.add('hideSection');
});

const moves = document.querySelectorAll('.movebutton');
moves.forEach((move) => {
    move.addEventListener('click', (e)=> {
        playRound(e.target.dataset.move);
        if(ComputerScore<=5 && UserScore <=5){
            updateScores();
        }

        if(ComputerScore >=5 ||UserScore >=5)
            endGame(UserScore>ComputerScore);
    });
});