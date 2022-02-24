const myArray = [
    'Rock',
    'Paper',
    'Scissors'
];

function computerPlay() {
    return myArray [Math.floor(Math.random() * myArray.length)];
}
// computer's decision for random element in array

let computerScore;
let playerScore;
let computerSelection
let playerSelection

game();
function game () {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5, i++;) {
        onUserInput();
    }
    console.log(declareWinner()); // loop to check for end of game

    function declareWinner() {
        if (playerScore === computerScore) {
            alert(playerScore + '-' + computerScore + '\ntiegame!');
            return playerScore + '-' + computerScore + '\ntiegame!';
        } else if (playerScore>computerScore) {
            alert(playerScore + '-' + computerScore + '\nYou won!!');
            return playerScore + '-' + computerScore + '\nYou won!!';
        } else {
            alert(playerScore + '-' + computerScore + '\nYou lost!')
            return playerScore + '-' + computerScore + '\nYou lost!'
        }
    }
}

function onUserInput() {
    playerSelection = prompt('Rock, Paper, or Scissors?', '');
    if ((playerSelection.toLowerCase()=='rock')
    || (playerSelection.toLowerCase()=='paper')
    || (playerSelection.toLowerCase()=='scissors')) { 
        console.log (playRound(playerSelection,computerPlay)); //Player input log + round
    } else {
        alert('Please choose a valid item.');
        onUserInput();
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection().toLowerCase();
    if (computerSelection == playerSelection){
        alert('The game is tied!');
        return 'tie game' ;
    } else if ((computerSelection == 'Rock' && playerSelection == 'scissors')
        || (computerSelection == 'Paper' && playerSelection == 'rock')
        || (computerSelection == 'Scissors' && playerSelection == 'paper')) {
        alert ('You just lost!' + computerSelection + 'defeats' + playerSelection + ':(');
        return 'Lost game';
    } else {
        alert('You won!' + playerSelection + 'defeats' + computerSelection + ':D');
        return 'Game won';
    }
}



