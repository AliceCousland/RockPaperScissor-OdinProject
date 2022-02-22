let playerSelection = prompt('Rock, Paper, or Scissors?', '');
    if ((playerSelection.toLowerCase()=='rock')
    || (playerSelection.toLowerCase()=='paper')
    || (playerSelection.toLowerCase()=='scissors')) {
    console.log (playRound(playerSelection, computerSelection));//Player input log
    } else {
        alert('Please choose a valid item.');
    }

let computerPlay = ["Rock", "Paper", "Scissors"];
let computerSelection = computerPlay().toLowerCase();
let random = Math.floor(Math.random() * computerPlay.length);
    console.log (random, computerPlay[random]);
// computer's decision for random element in array

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



