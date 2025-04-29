// 1. You’re going to store the gameboard as an array inside of a Gameboard object
// Your players are also going to be stored in objects, and you’re probably going 
// to want an object to control the flow of the game itself.

// ** this means I need:
// 1. a Gameboard Object variable, with an empty gameboard array with empty objects enclosed ? and is a module
// const gameboard = []; ?
// 2. A Player object variable to hold two player objects: Player 1, Player 2 - i guess this needs an array
// as well as X or O
// const players = [{ name: player1Name, marker: x }, { name: player2Name, marker: o }];
// 3. A GameController object for controlling the flow and state of the game's turns, 
// as well as if whether anybody has won the game or any other logic?


//have as little global code as possible. Try tucking as much as you can inside factories. 
// If you only need a single instance of something (e.g. the gameboard, the 
// displayController etc.) then wrap the factory inside an IIFE (module pattern) 

// functionality should be able to fit in the game, player or gameboard objects. 
// Take care to put them in “logical” places.

//Focus on getting a working game in the console first. no logic for winning yet




// create 1. gameboard object module with an "empty" gameboard array

const GameBoard = (function() {

// set up the empty array

const gameBoard = [];

 // set up a factory function for gameBoard

 function createGameBoard (name) {
  const discordName = "@" + name;
  return { name, discordName };
}


})(); // this is an immediately invoked function which is a module