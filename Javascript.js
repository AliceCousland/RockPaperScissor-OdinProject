let playerSelection = prompt('Rock, Paper, or Scissors?')
    playerSelection ['rock', 'Rock', 'ROCK',
    'paper', 'Paper', 'PAPER',
    'scissor', 'Scissor', 'SCISSOR']; 
    console.log(playerSelection)//Player input log

let computerPlay = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * computerPlay.length);
console.log(random, computerPlay[random]);
// computer's decision for random element in array

computerPlay =='rock'
if(playerSelection =='rock' || playerSelection =='Rock' || playerSelection =='ROCK') {
    alert('The game is tied! Rock cannot destroy rock!');
} else if (playerSelection =='paper' || playerSelection =='Paper' || playerSelection =='PAPER') {
    alert('You have won! Paper constrains the power of rock!');
} else if (playerSelection =='scissors' || playerSelection =='Scissors' || playerSelection =='SCISSORS') {
    alert('You lose! Scissors are smashed by rocks!')
}