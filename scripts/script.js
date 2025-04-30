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

function getGameBoard() {

  return createGameBoard();
}


return { createGameBoard, printGameBoard, getGameBoard };

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

// 1. start game - check
// 2. Player 1 goes check
// 3. player 2 goes
// 4. alternate 7 more times (a total of 9 turns) check with for loop
// 5. check who won
// 6. declare winner



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



// we need a position function or expression or calculation to state what array element the player needs to 
// put their marker in

function markerPosition(index) {


  const board = GameBoard.getGameBoard().gameBoard; // gives correct output of created initial board not empty array
  
  //console.log(board);
  let k = 0;
  let l = 0;
   index = k;
  
   let targetValue = 0;
  
     // index = // to get the index of each element i need a for loop
  
  for (k; k < board.length; k++) {
  
    for (l; l < board.length; l++) {
    console.log(`Index: ${[k]}, Element: ${board[k][l]}`); // index can change to l to show individual index of elements
  // k alone on board lists just all elements in each row
    
  // now check values for zero
  // use if statements
   
  if (board[k][l] === targetValue){
  
    console.log(`Found ${targetValue} at [${k}][${l}]`); // prints what element has zero
    
  }
    
  } // second for loop
  } // first for loop
  
  
  // now put splice and push the active marker
  console.log(getActiveMarker);
  board.splice([k][l], 1, getActiveMarker);
  console.log(board.splice([k][l], 1, getActiveMarker));
  console.log(board);
  
  
    
    return { targetValue, board, index, k, l };
  }
  
  
  const playerPositon = markerPosition();



// so now start with Player 1

function playRound() {

// need a for loop to play round 9 times

for (p = 0; p < 10; p++) { // p < 10 means up to 9

console.log(`${getActivePlayer}'s turn.`);

console.log(`${getActivePlayer} writes ${getActiveMarker} at ${playerPosition}`);

markerPosition(); // player 1 drops their marker

// switch turns

switchPlayers();

// now on the ninth time i need an if statement to say Gave Over

if (p === 9) {
console.log("Game Over");

}

}


} // end of playRound

playRound();













return { playRound, thePlayers, getActiveMarker, getActivePlayer, switchPlayers, markerPosition };

}

gameController();

