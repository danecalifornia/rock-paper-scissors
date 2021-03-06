// global variables needed in multiple parts of the program
let computerScore = 0; // computer's current score
let playerScore = 0; // players current score
let playerSelection = playerPlay(); // prompts player for a choice and stores as playerSelection
playerSelection = playerSelection.toLowerCase(); // makes the players selection lowercase
let computerSelection = computerPlay(); // makes the computers random choice variable computerSelection

// function that prompts the player for a selection and returns it
function playerPlay() {
  playerChoice = prompt("What is your choice?", "");
  return playerChoice;
}

// function that randomly returns the word rock, paper, or scissors from computer
function computerPlay() {
  let myArray = ["rock", "paper", "scissors"]; // creates an array that holds the 3 options; rock, paper, scissors
  // chooses a option from the array at random
  // Math.floor rounds to the nearest whole number
  // Math.random gives a random # between 0-1. Multiplied by the length of my
  // array so it now gives numbers between 0 and 2
  let randomChoice = Math.floor((Math.random() * myArray.length));
  return myArray[randomChoice]; // returns an array value that corrosponds with the random number choice
}

// function that represents a single round played
function playRound(playerSelection, computerSelection) {
  // if the player and the computer choose the same value, return a tie message and display score
  if (playerSelection == computerSelection) {
    // assign variable for result message
    let result = `It's a tie! You both chose ${computerSelection}. ${scoreKeeper()}`; // assign variable for result message
    console.log(result);
    // lists all ways a player can lose
  } else if (playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "scissors" && computerSelection == "rock" ||
    playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++; // adds one to the computer's score
    // re-assign variable for result message
    let result = `You Lose! ${computerSelection} beats ${playerSelection}. ${scoreKeeper()}`;
    console.log(result);
  } else {
    playerScore++; // add one to the players score; if they didn't tie or lose they won
    // re-assign variable for result message
    let result = `You win! ${playerSelection} beats ${computerSelection}. ${scoreKeeper()}`;
    console.log(result);
  }
  keepPlaying(playerScore, computerScore); // function invoked that determines wether a winner is declared or another round is played
}

// function that determines and declares the winner
function declareWinner() {
  let winner; // declare winner variable
  if (playerScore > computerScore) {
    winner = "you"; // if the players score is greater than the computers, the winner is the player
  } else {
    winner = "the computer"; // else, the winner is the computer
  }
  console.log(`The winner of the game is ${winner}!`); // prints to the console the winner
  playAgain();
}

// function determines wether the game still needs to be played
function keepPlaying(playerScore, computerScore) {
  if (playerScore == 5 || computerScore == 5) {
    declareWinner(); // if either player makes it to 5, declare a winner
  } else {
    playRound(playerPlay(), computerPlay()); // otherwise, play again with playRound()
  }
}

// function displays the current score
function scoreKeeper() {
  let score = `The current score is ${playerScore}:${computerScore}`;
  return score;
}

// function that gives the user and option to play again
function playAgain() {
  let response = prompt("Would you like to play again? Type yes or no", ""); // prompts the user to play again and stores as var response
  if (response == "yes") { // if response is yes, score counts are reset to zero and playRound function is called
    playerScore = 0;
    computerScore = 0;
    playRound(playerPlay(), computerPlay());
  } else { // if user inputs anything else an alert thanks them for playing
    alert("Thanks for playing! Until next time.");
  }
}

// starts the game
console.log(playRound(playerSelection, computerSelection));



//                        scratch code + ideas here

//  else if (playerSelection != "rock" || "paper" || "scissors") {
//    console.log(`${playerSelection} is not an option. Please choose rock, paper, or scissors.`)
//  }

// function game() {
// for (let i = 0; i < 5; i++) {
//    console.log(playRound(playerSelection, computerSelection));
//  }
// }

// use console.log to see the returned results of playRound()
// console.log(playRound(playerSelection, computerSelection));
