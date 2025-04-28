// 1. You’re going to store the gameboard as an array inside of a Gameboard object
// Your players are also going to be stored in objects, and you’re probably going 
// to want an object to control the flow of the game itself.

// ** this means I need:
// 1. a Gameboard Object variable, with an empty gameboard array with empty objects enclosed ?
// const gameboard = []; ?
// 2. A Player object variable to hold two player objects: Player 1, Player 2 - i guess this needs an array
// as well as X or O
// const players = [{ name: player1Name, marker: x }, { name: player2Name, marker: o }];
// 3. A GameController object for controlling the flow and state of the game's turns, 
// as well as if whether anybody has won the game or any other logic?
// So a gamecontroller variable, that equals a factory function?
// const gameController = (function (player1Name, player2Name) {
  // something here
// player1Name = "Player One"; 
// player2Name = "Player Two";

// const gameboard = Gameboard(); // [];
// const players = [{ name: player1Name, marker: x }, { name: player2Name, marker: o }];

// let activePlayer = players[0]; // this means Player One with X as s marker

// const switchPlayerTurn = () => {
   // activePlayer = activePlayer === players[0] ? players[1] : players[0];
 // };

 // const getActivePlayer = () => activePlayer;
 // console.log(`${getActivePlayer().name}'s turn.`);

 //const playRound = () => {
// console.log(
   // `Writing ${getActivePlayer().name}'s ${marker} on the gameboard in ${column}${row}.`
// );

  //return { activePlayer, player1Name, player2Name, gameboard };
// })(); // I guess that last bracket is calling itself?


// so gameboard has to be a separate function too
// I also guess gameboard obj variable and player obj variable are inside of this gamecontroller factory function


//have as little global code as possible. Try tucking as much as you can inside factories. 
// If you only need a single instance of something (e.g. the gameboard, the 
// displayController etc.) then wrap the factory inside an IIFE (module pattern) 

// functionality should be able to fit in the game, player or gameboard objects. 
// Take care to put them in “logical” places.

//Focus on getting a working game in the console first. no logic for winning yet

function Gameboard() {

    const rows = 3;
  const columns = 3;
const gameboard = [];


// Create a 2d array that will represent the state of the game board
  // For this 2d array, row 0 will represent the top row and
  // column 0 will represent the left-most column.
  // This nested-loop technique is a simple and common way to create a 2d array.
  for (let i = 0; i < rows; i++) {
    gameboard[i] = [];
    for (let j = 0; j < columns; j++) {
      gameboard[i].push(Cell());
    }
  }

  // This will be the method of getting the entire board that our
  // UI will eventually need to render it.
  const getBoard = () => gameboard;




/*
** A Cell represents one "square" on the board and can have one of
** 0: no token is in the square,
** 1: Player One's token,
** 2: Player 2's token
*/

function Cell() {
    let value = "0";
  
    // Accept a player's token to change the value of the cell
    const addMarker = (player) => {
      value = player;
    };
  
    // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addMarker,
    getValue
  };
}






// In order to drop a token, we need to find what the lowest point of the
  // selected column is, *then* change that cell's value to the player number
  const writeMarker = (column, player) => {
    // Our board's outermost array represents the row,
    // so we need to loop through the rows, starting at row 0,
    // find all the rows that don't have a token, then take the
    // last one, which will represent the bottom-most empty cell
    const availableCells = gameboard.filter((row) => row[column].getValue() === 0).map(row => row[column]);

    // If no cells make it through the filter, 
    // the move is invalid. Stop execution.
    if (!availableCells.length) return;

    // Otherwise, I have a valid cell, the last one in the filtered array
   //const lowestRow = availableCells.length - 1;
    //gameboard[lowestRow][column].addMarker(player);


   gameboard[i][column].addMarker(player);
  };



  // This method will be used to print our board to the console.
  // It is helpful to see what the board looks like after each turn as we play,
  // but we won't need it after we build our UI
  const printBoard = () => {
    const boardWithCellValues = gameboard.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

// Here, we provide an interface for the rest of our
  // application to interact with the board
  return { getBoard, writeMarker, printBoard };


}



/*
** A Cell represents one "square" on the board and can have one of
** 0: no token is in the square,
** 1: Player One's token,
** 2: Player 2's token
*/

/*
function Cell() {
    let value = "0";
  
    // Accept a player's token to change the value of the cell
    const addMarker = (player) => {
      value = player;
    };
  
    // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addMarker,
    getValue
  };
}

*/


function GameController (player1Name, player2Name) {
    // something here
   player1Name = "Player One"; 
   player2Name = "Player Two";
   x = "x";
   o = "o";
  
  const gameboard = Gameboard(); // [];
  const players = [{ name: player1Name, marker: x }, { name: player2Name, marker: o }];
  
   let activePlayer = players[0]; // this means Player One with X as s marker
  
   const switchPlayerTurn = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
  
    const getActivePlayer = () => activePlayer;
    console.log(`${getActivePlayer().name}'s turn.`); // this prints first
  

    const printNewRound = () => { // we are stuck here. the board is printed and the turn text prints
        gameboard.printBoard(); // yes shows 3x3 grid with strings ready
        console.log(`${getActivePlayer().name}'s turn.`); // shows
      };


   const playRound = (column) => {
  console.log(
      `Writing ${getActivePlayer().name}'s marker on the gameboard in ${column}.`
   );

   gameboard.writeMarker(column, getActivePlayer().marker);

/*  This is where we would check for a winner and handle that logic,
        such as a win message. */

    // Switch player turn
    switchPlayerTurn();
    printNewRound();

};
  // Initial play game message

  playRound();
  printNewRound();

  // For the console version, we will only use playRound, but we will need
  // getActivePlayer for the UI version, so I'm revealing it now

    return { getActivePlayer, playRound };



}


const game = GameController();