// function that randomly returns the word rock, paper, or scissors
function computerPlay() {
  // creates an array that holds the 3 options; rock, paper, scissors
  let myArray = ["rock", "paper", "scissors"];
  // chooses a option from the array at random
  // Math.floor rounds to the nearest whole number
  // Math.random gives a random # between 0-1. Multiplied by the length of my
  // array so it now gives numbers between 0 and 2
  let randomChoice = Math.floor((Math.random() * myArray.length));
  // returns an array value that corrosponds with the random number choice
  return myArray[randomChoice];
}

// function that represents a single round played
function playRound(playerSelection, computerSelection) {
  // ensures that the player selection is lowercase
  playerSelection = playerSelection.toLowerCase();
  // if the player and the computer choose the same value, send a tie message and try again
  if (playerSelection == computerSelection) {
    // if both selections are the same, it's a tie with no winner.
    // assign variable for result message
    let result = `It's a tie! You both chose ${computerSelection}. Try again.`;
    return result;
    // lists all ways a user can lose
  } else if (playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "scissors" && computerSelection == "rock" ||
    playerSelection == "paper" && computerSelection == "scissors") {
    // re-assign variable for result message
    let result = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    return result;
    // user wins if none of the above are true
  } else {
    // re-assign variable for result message
    let result = `You win! ${playerSelection} beats ${computerSelection}.`;
    return result;
  }
}

let playerSelection = "paper";
let computerSelection = computerPlay();
// use console.log to see the returned results
console.log(playRound(playerSelection, computerSelection));



//                        scratch code here
//    else if (playerSelection != "rock" || "paper" || "scissors") {
//      console.log(`${playerSelection} is not an option. Please choose rock, paper, or scissors.`)
//    }
