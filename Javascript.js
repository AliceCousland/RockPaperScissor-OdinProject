let playerSelection = prompt('Rock, Paper, or Scissors?')
    playerSelection ['rock', 'Rock', 'ROCK',
    'paper', 'Paper', 'PAPER',
    'scissor', 'Scissor', 'SCISSOR']; 
    console.log (playerSelection)//Player input log

let computerPlay = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * computerPlay.length);
    console.log (random, computerPlay[random]);
// computer's decision for random element in array

if (computerPlay =='Rock') {

if(playerSelection == 'rock' || playerSelection == 'Rock' || playerSelection == 'ROCK') {
    alert('The game is tied! Rock cannot destroy rock!');
} else if (playerSelection =='paper' || playerSelection =='Paper' || playerSelection =='PAPER') {
    alert('You have won! Paper constrains the power of rock!');
} else if (playerSelection =='scissors' || playerSelection =='Scissors' || playerSelection =='SCISSORS') {
    alert('You lose! Scissors are smashed by rocks!');
} //results if computer chooses rock

} else if (computerPlay =='Paper') {

if(playerSelection == 'rock' || playerSelection == 'Rock' || playerSelection == 'ROCK') {
    alert('You lose! Rock is constrained by paper!');
} else if (playerSelection =='paper' || playerSelection =='Paper' || playerSelection =='PAPER') {
    alert('The game is tied! Paper vs paper = origami!');
} else if (playerSelection =='scissors' || playerSelection =='Scissors' || playerSelection =='SCISSORS') {
    alert('You win! Your scissors cut up the paper!');
} //results if computer chooses paper

} else if (computerPlay =='Scissors') {    

if(playerSelection == 'rock' || playerSelection == 'Rock' || playerSelection == 'ROCK') {
    alert('You win! Your rock destroys the enemy scissors!');
} else if (playerSelection =='paper' || playerSelection =='Paper' || playerSelection =='PAPER') {
    alert('You lose! Your paper was cut into bits!');
} else if (playerSelection =='scissors' || playerSelection =='Scissors' || playerSelection =='SCISSORS') {
    alert('The game is tied! Scissors + scissors = a lesbian couple!');
} //results if computer chooses scissors

}
