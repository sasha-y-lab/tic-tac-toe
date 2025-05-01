// create 1. gameboard object module with an "empty" gameboard array

const GameBoard = (function() {

// set up the empty array (not really empty)

  let gameBoard = [];

 // set up a factory function for gameBoard

 function createGameBoard(row = 3, column = 3, value = 0) {
  gameBoard = []; // Clear the previous board if any

  // Create a new 2D array with the given row and column dimensions
  for (let i = 0; i < row; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < column; j++) {
      gameBoard[i][j] = value;
    }
  }
}

// to print the current state of the gameboard

function printGameBoard() {

 // const printBoard = createGameBoard();

  //console.log(printBoard.gameBoard); // array initially filled with zeros

  // [[0,0,0], [0,0,0], [0,0,0]]

  //lined up like this

 // [0,0,0]
 // [0,0,0]
 // [0,0,0]

 console.log(gameBoard.map(row => row.join(' ')).join('\n'));

 return gameBoard;

  //return printBoard;

}
//printGameBoard();

// function to access the gameboard

function getGameBoard() {

  return gameBoard;
}



return { printGameBoard, createGameBoard, getGameBoard };

})(); // this is an immediately invoked function which is a module


// now that the array was successfully created, what is next?
// next I need to createPlayers. Is it a single instance called? no. so no module. Just factory function

function gamePlayers() {


function createPlayer(name, marker) {

  return { name, marker };
  
}

//createPlayer();

const player1 = createPlayer("Player One", 1);
  const player2 = createPlayer("Player Two", 2);

  return { createPlayer, player1, player2 };

}

//gamePlayers();


function gameController() {
  let turnTracker = 0
  const thePlayers = gamePlayers();
  GameBoard.createGameBoard();

// what is the logic in here?

// 1. start game - check
// 2. Player 1 goes check
// 3. player 2 goes
// 4. alternate 7 more times (a total of 9 turns) check with for loop
// 5. check who won
// 6. declare winner



// so first, 1. start game. 




//need a getActivePlayer and getActiveMarker function as switch only switches at every instance!

function getActivePlayer() {
  const activePlayer = turnTracker % 2 === 0 ? thePlayers.player1 : thePlayers.player2;
  return { activePlayer: activePlayer.name, activeMarker: activePlayer.marker };
}


// Function to check if a player has won
function checkWin(marker) {
  const board = GameBoard.getGameBoard();

  // Check rows: if all the cells in the row contain the same marker.
  for (let row = 0; row < board.length; row++) {
    if (board[row].every(cell => cell === marker)) {
      console.log(`${marker === 1 ? 'Player One' : 'Player Two'} wins (Row)!`);
      return true;
    }
  }

  // Check columns: if all the cells in the column contain the same marker.
  for (let col = 0; col < board[0].length; col++) {
    if (board.every(row => row[col] === marker)) {
      console.log(`${marker === 1 ? 'Player One' : 'Player Two'} wins (Column)!`);
      return true;
    }
  }

  // Check diagonals: if all the cells in the diagonal contain the same marker.
  if (board.every((row, index) => row[index] === marker)) {
    console.log(`${marker === 1 ? 'Player One' : 'Player Two'} wins (Diagonal top-left to bottom-right)!`);
    return true;
  }
  if (board.every((row, index) => row[board.length - 1 - index] === marker)) {
    console.log(`${marker === 1 ? 'Player One' : 'Player Two'} wins (Diagonal top-right to bottom-left)!`);
    return true;
  }

  return false;
}


// we need a position function or expression or calculation to state what array element the player needs to 
// put their marker in

function markerPosition(activeMarker) {
  const board = GameBoard.getGameBoard();
  let availablePositions = []; // To store available (empty) positions

  // Collect all empty positions (cells with value 0)
  for (let k = 0; k < board.length; k++) {
    for (let l = 0; l < board[k].length; l++) {
      if (board[k][l] === 0) {
        availablePositions.push({ k, l }); // Store position as an object {row, column}
      }
    }
  }

  // If there are no available positions, return
  if (availablePositions.length === 0) {
    console.warn("No empty cell found");
    return { k: -1, l: -1 }; // Return invalid coordinates
  }

  // Pick a random position from the available positions
  const randomIndex = Math.floor(Math.random() * availablePositions.length);
  const randomPosition = availablePositions[randomIndex];

  // Place the marker in the randomly selected position
  board[randomPosition.k][randomPosition.l] = activeMarker;
  console.log(`${activeMarker === 1 ? 'Player One' : 'Player Two'} places marker ${activeMarker} at [${randomPosition.k}, ${randomPosition.l}]`);

  return randomPosition;
}

// function to play the game loop

function playRound() {
  console.log("Player One will use 1 to mark on the board, while Player Two will use 2 to mark on the board.");
  
  for (let turn = 0; turn < 9; turn++) {
    const { activePlayer, activeMarker } = getActivePlayer(); // Get current player and marker
    console.log(`${activePlayer}'s turn.`);

    // Place marker on the board
    const pos = markerPosition(activeMarker);

    // Print board after each move
    GameBoard.printGameBoard();


// Check for winner after each move
if (checkWin(activeMarker)) {
  console.log(`${activePlayer} wins the game!`);
  return; // End the game if there is a winner
}


    // Increment turnTracker to switch players
    turnTracker++;
  }
  
  console.log("Game Over! It's a draw!");
}

return { playRound };
}

// Start the game
const game = gameController();
game.playRound(); // Run the game loop