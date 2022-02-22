let playerSelection = prompt('Rock, Paper, or Scissors?', '');
    if ((playerSelection.toLowerCase()=='rock')
    || (playerSelection.toLowerCase()=='paper')
    || (playerSelection.toLowerCase()=='scissors')) { 
        console.log (playerSelection) //Player input log
    } else {
        alert('Please choose a valid item.');
    }

let computerPlay = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * computerPlay.length);
    console.log (random, computerPlay[random]);
// computer's decision for random element in array

game();
function game () {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5, i++;) {
        playerSelection()
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



