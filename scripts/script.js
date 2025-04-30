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

const player1Info = { name: player1.name, marker: player1.marker };

//console.log({ name: player1.name, marker: player1.marker });

const player2 = createPlayer("Player Two", 2);

const player2Info = { name: player2.name, marker: player2.marker };

//console.log({ name: player2.name, marker: player2.marker });

return {createPlayer, player1, player2, player1Info, player2Info };

}

//gamePlayers();


function gameController() {

  let activePlayer;
  let activeMarker;
  let playerPosition;

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

//let activePlayer; //= thePlayers.player1.name;

//let activeMarker; // = thePlayers.player1.marker;

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

//need a getActivePlayer and getActiveMarker function as switch only switches at every instance!

function getActivePlayer() {
/// use the turn tracker
//If turnTacker is 0 checkOdd is FALSE, if turnTacker is 1 checkOdd is TRUE, if turnTacker is 
// 2 checkOdd is FALSE, and so on.

let checkTurns = gameController().playRound().turnTracker;


function checkOdd(int) {
  return int % 2;
}

if(checkOdd(checkTurns)){
  // player2 is active
  activePlayer = thePlayers.player2.name;
  activeMarker = thePlayers.player2.marker;

}else{
  // player1 is active

  activePlayer = thePlayers.player1.name;
  activeMarker = thePlayers.player1.marker;
};

return { activePlayer, checkTurns, checkOdd, activeMarker }

}


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
  console.log(updatePlayer.activeMarker);
  board.splice([k][l], 1, updatePlayer.activeMarker);
  console.log(board.splice([k][l], 1, updatePlayer.activeMarker));
  console.log(board);
  
  
    
    return { targetValue, board, index, k, l };
  }
  
  
   



// so now start with Player 1

function playRound(activePlayer, activeMarker, playerPosition) {

  const updatePlayer = getActivePlayer();

  activePlayer = gameController().updatePlayer.activePlayer;
activeMarker = gameController().updatePlayer.activeMarker;

playerPosition = markerPosition();



let p = 0;

let turnTracker = p;

// need a for loop to play round 9 times

for (p; p < 10; p++) { // p < 10 means up to 9

console.log(`${activePlayer}'s turn.`);

console.log(`${activePlayer} writes ${activeMarker} at ${playerPosition}`);

playerPosition; // player 1 drops their marker

// print board

GameBoard.printGameBoard().gameBoard;

// log turn

console.log(`Turns: ${turnTracker}.`)

// switch turns

switchPlayers();

// now on the ninth time i need an if statement to say Gave Over

if (p === 9) {
console.log("Game Over");

}

}


return { p, turnTracker, updatePlayer, activePlayer, activeMarker, markerPosition, switchPlayers, getActivePlayer, playerPosition }

} // end of playRound

const playAgain = playRound();


return { playRound, playAgain, thePlayers, getActivePlayer, activePlayer, activeMarker, playerPosition, switchPlayers, markerPosition };

}

//gameController();

//const game = gameController();

//game.playRound(1, [1][1]);


function gamePlay() {



} 

gamePlay();

