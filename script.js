
// function that randomly returns the word rock, paper, or scissors
function computerPlay () {
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
