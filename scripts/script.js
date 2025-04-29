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

// set up the empty array (not really empty)

  let gameBoard = [];

 // set up a factory function for gameBoard

 function createGameBoard(row, column, value) {
  

  row = 3;
  column = 3;
  value = 0;

// to create a 2d array you need 2 for loops nested

for (i = 0; i < row; i++) {
  // iterate the actual array
gameBoard[i] = [];
console.log(gameBoard[i]); // undefined

for (j = 0; j < column; j++) {
// now add columns and rows
gameBoard[i][j] = value;
//gameBoard.push(marker);

//console.log(gameBoard[i][j] = value); // output 0

//console.log(gameBoard); //output new array filled with zeros

}

}


  return { row, column, value, gameBoard };
}


// now that the array is created and essentially the gameboard is created
// now I need to print the gameboard, so set up another factor function

function printGameBoard() {

  const printBoard = createGameBoard();

  console.log(printBoard.gameBoard); // array initially filled with zeros

  // [[0,0,0], [0,0,0], [0,0,0]]

  //lined up like this

 // [0,0,0]
 // [0,0,0]
 // [0,0,0]

  return printBoard;

}
//printGameBoard();


return { createGameBoard, printGameBoard };

})(); // this is an immediately invoked function which is a module


// now that the array was successfully created, what is next?
// next I need to createPlayers. Is it a single instance called? no. so no module. Just factory function

function gamePlayers() {


function createPlayer(name, marker) {
 
  const players = { name, marker };

  return { players, name, marker };
  
}

//createPlayer();

const player1 = createPlayer("Player One", 1);

console.log({ name: player1.name, marker: player1.marker });

const player2 = createPlayer("Player Two", 2);

console.log({ name: player2.name, marker: player2.marker });

return {createPlayer, player1, player2 };

}

gamePlayers();
