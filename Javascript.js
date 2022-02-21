let playerSelection = prompt('Rock, Paper, or Scissors?')
    = ['rock', 'Rock', 'ROCK',
    'paper', 'Paper', 'PAPER',
    'scissor', 'Scissor', 'SCISSOR']; 
    console.log(playerSelection)//Player input

let computerPlay = ["Rock", "Paper", "Scissors"];

let random = Math.floor(Math.random() * computerPlay.length);
console.log(random, computerPlay[random]);
// computer's decision for random element in array


    