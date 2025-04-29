// 1. You’re going to store the gameboard as an array inside of a Gameboard object
// Your players are also going to be stored in objects, and you’re probably going 
// to want an object to control the flow of the game itself.

// ** this means I need:

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

//gamePlayers();



// what next? 3. gameController for controlling the flow and state of the game's turns, 
// as well as if whether anybody has won the game or any other logic

// not an instance called once? no. it may need to be called multiple times with arguments.


// so create a factory function

function gameController(playerName, playerMarker, playerPosition) {

// what is the logic in here?

// 1. start game
// 2. Player 1 goes
// 3. player 2 goes
// 4. alternate 7 more times (a total of 9 turns)
// 5. check who won
// 6. declare winner

// what are the parameters? you need a name, marker value, and position (coordinates) where
//  you're dropping the marker

// playerName needs an active player to work

//playerMarker needs an active marker

// position needs coordinates of the board

// so first, 1. start game. 

console.log("Player One will use 1 to mark on the board, while Player Two will use 2 to mark on the board"); // statement for clarity

// how to start? someone has to go first. First is Player one.

// first we need to write how to make player 1 the active player.

const thePlayers = gamePlayers();

let activePlayer = thePlayers.player1.name;

let activeMarker = thePlayers.player1.marker;

const p1 = thePlayers.player1.name;
  const p2 = thePlayers.player2.name;

  const p1mkr = thePlayers.player1.marker;
  const p2mkr = thePlayers.player2.marker;

//console.log(activePlayer); // yes this is Player One.

const switchPlayers = function() {

  activePlayer = activePlayer === p1 ? p2 : p1;

  activeMarker = activeMarker === p1mkr ? p2mkr : p1mkr;

  return { activePlayer, activeMarker, p1, p2, p2mkr, p1mkr };

}

//console.log(switchPlayers());

let getActivePlayer = switchPlayers().activePlayer;
let getActiveMarker = switchPlayers().activeMarker;

// so now start with Player 1

console.log(`${getActivePlayer}'s turn.`);

console.log(`${getActivePlayer} writes ${getActiveMarker} at position`);


// we need a position function or expression or calculation













}

gameController();

