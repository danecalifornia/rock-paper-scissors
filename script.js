// global variables needed in multiple parts of the program
let computerScore = 0; // computer's current score
let playerScore = 0; // players current score
let playerSelection = ""; // prompts player for a choice and stores as playerSelection
// playerSelection = playerSelection.toLowerCase(); // makes the players selection lowercase
let computerSelection = computerPlay(); // makes the computers random choice variable computerSelection

// NEW CODE HERE 5/26/22
let rockButton = document.querySelector("#rock");
rockButton.addEventListener('click', () => {
  // playerSelection = "rock";
  playRound("rock", computerPlay());
});

let paperButton = document.querySelector("#paper");
paperButton.addEventListener('click', () => {
  // playerSelection = "paper";
  playRound("paper", computerPlay());
});

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener('click', () => {
  // playerSelection = "scissors";
  playRound("scissors", computerPlay());
});

const resultsContainer = document.querySelector('.results');
const content = document.createElement('div');

const theWordScore = document.querySelector('.scoreword');
const scoreScore = document.createElement('div');


const scoreContainer = document.querySelector('.score');
const computerContent = document.createElement('div');

const youContent = document.createElement('div');
youContent.textContent = `You: ${playerScore}`;
scoreScore.textContent = `Score:`;
computerContent.textContent = `Computer: ${computerScore}`;

theWordScore.appendChild(scoreScore);
scoreContainer.appendChild(youContent);
scoreContainer.appendChild(computerContent);


const resetContainer = document.querySelector('.resetbutton');
const resetContent = document.createElement('button');

// NEW CODE END

// function that prompts the player for a selection and returns it
/* function playerPlay() {
   playerChoice = prompt("What is your choice?", "");
   return playerChoice.toLowerCase();
} */

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
    let result = `It's a tie! You both chose ${computerSelection}.`; // assign variable for result message
    // console.log(result);
    content.classList.add('content');
    content.textContent = `${result}`;
    resultsContainer.appendChild(content);
    resultsContainer.style.display = 'flex';
    // computerContent.textContent = `Score: ${playerScore}:${computerScore}`;
  //  scoreContainer.appendChild(computerContent);
  youContent.textContent = `You: ${playerScore}`;
  computerContent.textContent = `Computer: ${computerScore}`;
  scoreContainer.appendChild(youContent);
  scoreContainer.appendChild(computerContent);


    // lists all ways a player can lose
  } else if (playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "scissors" && computerSelection == "rock" ||
    playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++; // adds one to the computer's score
    // re-assign variable for result message
    let result = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
    // console.log(result);
    content.classList.add('content');
    content.textContent = `${result}`;
    resultsContainer.appendChild(content);
    resultsContainer.style.display = 'flex';
  //  computerContent.textContent = `Score: ${playerScore}:${computerScore}`;
    // scoreContainer.appendChild(computerContent);

    youContent.textContent = `You: ${playerScore}`;
    computerContent.textContent = `Computer: ${computerScore}`;
    scoreContainer.appendChild(youContent);
    scoreContainer.appendChild(computerContent);


  } else {
    playerScore++; // add one to the players score; if they didn't tie or lose they won
    // re-assign variable for result message
    let result = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    // console.log(result);
    content.classList.add('content');
    content.textContent = `${result}`;
    resultsContainer.appendChild(content);
    resultsContainer.style.display = 'flex';
    // computerContent.textContent = `Score: ${playerScore}:${computerScore}`;
    // scoreContainer.appendChild(computerContent);
    youContent.textContent = `You: ${playerScore}`;
    computerContent.textContent = `Computer: ${computerScore}`;
    scoreContainer.appendChild(youContent);
    scoreContainer.appendChild(computerContent);



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
  content.classList.add('content');
  content.textContent = `The winner of the game is ${winner}!`;

  resetContent.classList.add('playagain');
  resetContent.textContent = "play again";
  // return resultsContainer.appendChild(content);
  return winnerDisplay();
  // console.log(`The winner of the game is ${winner}!`); // prints to the console the winner
  // playAgain();
}
// WORK IN PROGRESS winner display and play again display function
function winnerDisplay(){
  resultsContainer.appendChild(content);
  resultsContainer.style.display = 'flex';
  resetContainer.appendChild(resetContent);
  resetContainer.style.display = 'flex';
  // when someone wins the game disable the buttons
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;

  resetContent.addEventListener('click', () => {
    playAgain();
    // enable buttons when user clicks the play again button
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resetContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    // resetContainer.remove(resetContent);
  });
  // resetContainer.appendChild(resetContent);
}

// function determines wether the game still needs to be played
function keepPlaying(playerScore, computerScore) {
  if (playerScore == 5 || computerScore == 5) {
    declareWinner(); // if either player makes it to 5, declare a winner
  } else {
    return; // otherwise, play again with playRound() before was playRound(playerPlay(), computerPlay());
  }
}

// function displays the current score
function scoreKeeper() {
  let score = `The current score is ${playerScore}:${computerScore}`;
  return score;
}

// function that gives the user and option to play again
function playAgain() {
  // let response = prompt("Would you like to play again? Type yes or no", ""); // prompts the user to play again and stores as var response
  // if (response == "yes") { // if response is yes, score counts are reset to zero and playRound function is called
    playerScore = 0;
    computerScore = 0;
    youContent.textContent = `You: ${playerScore}`;
    computerContent.textContent = `Computer: ${computerScore}`;
    scoreContainer.appendChild(youContent);
    scoreContainer.appendChild(computerContent);
    return;
  } // else { // if user inputs anything else an alert thanks them for playing
    // alert("Thanks for playing! Until next time.");
  // }
// }

// starts the game
// console.log(playRound(playerSelection, computerSelection));



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
