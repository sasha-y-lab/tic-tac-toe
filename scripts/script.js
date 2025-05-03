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
    markerPosition(activeMarker);

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

return { playRound, checkWin };
}

// Start the game
//const game = gameController();
//game.playRound(); // Run the game loop


// #4: create an object that will handle the display/DOM logic - create a module

const DisplayController = (function() {

// Write a function that will render the contents of the gameboard array to the webpage

const brdContainer = document.querySelector("#board-container");


//const board = GameBoard.getGameBoard();
let currentPlayer = "X";

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];






//  allow players to put in their names, include a button to start/restart the game

document.addEventListener("DOMContentLoaded", () => {
  startRestart(); // Call startRestart after DOM content is loaded
});

function startRestart() {
  const mainContainer = document.querySelector("#main-container");
  
  // Check if start button already exists
  if (!document.querySelector("#start-btn")) {
      const buttons = document.createElement("div");
      buttons.setAttribute("id", "btn-div");

      const startBtn = document.createElement("button");
      startBtn.setAttribute("id", "start-btn");
      startBtn.textContent = "Start";

      buttons.appendChild(startBtn);
      mainContainer.appendChild(buttons);

      // Add event listener to open dialog when Start button is clicked
      startBtn.addEventListener("click", () => {
          const dialog = document.querySelector("#dialog");
          brdContainer.innerHTML = "";
          
          board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
          ];

          if (dialog) {
              dialog.showModal(); // This should open the dialog
          } else {
              console.error("Dialog not found!");
          }
      });
  }
  
}



const formEl = document.querySelector(".form");
const dialog = document.querySelector("#dialog");
//const popup = document.querySelector("#popup");

if (formEl && dialog) {
    formEl.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission
        
        const formData = new FormData(formEl);
        const player1name = formData.get("player1_name");
        const player2name = formData.get("player2_name");
      //  const markerItem = document.querySelectorAll(".marker-item");
       // const markerDiv = document.querySelectorAll(".marker-div");
       // markerDiv.addEventListener("click", handleClick);
        

        // Validate the form input
        if (validateForm(player1name, player2name)) {
         
            displayPlayerNames(player1name, player2name); // Display player names
            
            renderBoard();

            formEl.reset();
            dialog.close(); // Close the dialog
        }
    });
}

function validateForm(player1name, player2name) {
    if (!player1name || !player2name) {
        alert("Both player names must be filled out.");
        return false;
    }
    return true;
}


function displayPlayerNames(player1name, player2name) {

 // const startBtn = document.querySelector("#start-btn");
const mainContainer = document.querySelector("#main-container");


  let playersNameDiv = document.querySelector("#players-name-div");

  

  // If the player names container doesn't exist, create it
  if (!playersNameDiv) {
      playersNameDiv = document.createElement("div");
      playersNameDiv.setAttribute("id", "players-name-div");

      const player1Div = document.createElement("div");
      player1Div.setAttribute("id", "player1");
      playersNameDiv.appendChild(player1Div);

      const player2Div = document.createElement("div");
      player2Div.setAttribute("id", "player2");
      playersNameDiv.appendChild(player2Div);

      mainContainer.insertBefore(playersNameDiv, brdContainer);
      
  }

  // Update the player names in the UI
  playersNameDiv.querySelector("#player1").textContent = `Player 1: ${player1name}`;
  playersNameDiv.querySelector("#player2").textContent = `Player 2: ${player2name}`;
  
}



function renderBoard() {

  brdContainer.innerHTML = ""; // clear old content

  
//console.log(board[0][1]); 
//console.log(board[1][0]);
//console.log(board[2][2]);

  for (let row = 0; row < board.length; row++) {

    for (let col = 0; col < board.length; col++) {

 let marker = board[row][col];

const markerDiv = document.createElement("div");
markerDiv.classList.add("marker-div");
//markerDiv.setAttribute("data-row", "row");
//markerDiv.setAttribute("data-col", "col");
markerDiv.dataset.row = row;
markerDiv.dataset.col = col;



const markerItem = document.createElement("div");
markerItem.classList.add("marker-item");
markerItem.textContent = marker;

markerDiv.appendChild(markerItem);

brdContainer.appendChild(markerDiv);

// Add event listener only if spot is empty
if (marker === "") {
  markerDiv.addEventListener("click", handleClick);
} 

  }

}




function handleClick(event) {
  const row = parseInt(event.currentTarget.dataset.row);
  const col = parseInt(event.currentTarget.dataset.col);

  // If the spot is already taken, do nothing
  if (board[row][col] !== "") return;

  // Set marker
  board[row][col] = currentPlayer;

  // Switch player
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  // Re-render the board
  renderBoard();

// winning logic



}

console.log(board);

const showWinningMsg = () => {

  const winMsgElement = document.createElement("div");
  winMsgElement.classList.add("win-msg");
  brdContainer.appendChild(winMsgElement);
  
  const markerDivDisables = document.querySelectorAll(".marker-div");
 //const startBtn = document.querySelector("#start-btn");
 //const markerItem = document.querySelectorAll(".marker-item");
  
  markerDivDisables.forEach(markerDivDisable => {
  
  // Check rows: if all the cells in the row contain the same marker.
  for (let row = 0; row < board.length; row++) {
    if (board[row].every(cell => cell == "X")) {
  markerDivDisable.removeEventListener("click", handleClick);
  
      winMsgElement.textContent = `Player One wins!`;
     // markerItem.textContent = "";
     
      //markerDivDisable,addEventListener("click", handleClick);
      
     
    } else if (board[row].every(cell => cell == "O")) {
     markerDivDisable.removeEventListener("click", handleClick);
      winMsgElement.textContent = `Player Two wins!`;
     // markerItem.textContent = "";
     // markerDivDisable,addEventListener("click", handleClick);
    } 
  }
  
  // Check columns: if all the cells in the column contain the same marker.
  for (let col = 0; col < board[0].length; col++) {
    if (board.every(row => row[col] == "X")) {
     markerDivDisable.removeEventListener("click", handleClick);
      winMsgElement.textContent = `Player One wins!`;
     // markerItem.textContent = "";
     // markerDivDisable,addEventListener("click", handleClick);
      
    } else if (board.every(row => row[col] == "O")) {
      markerDivDisable.removeEventListener("click", handleClick);
      winMsgElement.textContent = `Player Two wins!`;
     // markerItem.textContent = "";
     // markerDivDisable,addEventListener("click", handleClick);
      
    } 
  }
  
  // Check diagonals: if all the cells in the diagonal contain the same marker.
  if (board.every((row, index) => row[index] == "X")) {
   markerDivDisable.removeEventListener("click", handleClick);
    winMsgElement.textContent = `Player One wins!`;
   // markerItem.textContent = "";
   // markerDivDisable,addEventListener("click", handleClick);
    
    
  } else if (board.every((row, index) => row[index] == "O")) {
    markerDivDisable.removeEventListener("click", handleClick);
    winMsgElement.textContent = `Player Two wins!`;
   // markerItem.textContent = "";
    //markerDivDisable,addEventListener("click", handleClick);
    
  
  } 
  
   
  
  if (board.every((row, index) => row[board.length - 1 - index] == "X")) {
    markerDivDisable.removeEventListener("click", handleClick);
    winMsgElement.textContent = `Player One wins!`;
    //markerItem.textContent = "";
   // markerDivDisable,addEventListener("click", handleClick);
    
  } else if (board.every((row, index) => row[board.length - 1 - index] == "O")) {
   markerDivDisable.removeEventListener("click", handleClick);
    winMsgElement.textContent = `Player Two wins!`;
    //markerItem.textContent = "";
  //  markerDivDisable,addEventListener("click", handleClick);
    
  } 
  
  }); // end of for each
  
  
  
  } // end of show msg
  showWinningMsg();


}

//renderBoard();



return { board, renderBoard, startRestart, brdContainer };
})();



