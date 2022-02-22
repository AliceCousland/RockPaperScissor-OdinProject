let playerSelection = prompt('Rock, Paper, or Scissors?')
    if ((playerSelection.toLowerCase()=='rock')
    || (playerSelection.toLowerCase()=='paper')
    || (playerSelection.toLowerCase()=='scissors')) {
    console.log (playerSelection)//Player input log
    } else {
        alert('Please choose a valid item.')
    }

let computerPlay = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * computerPlay.length);
    console.log (random, computerPlay[random]);
// computer's decision for random element in array

