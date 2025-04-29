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


//have as little global code as possible. Try tucking as much as you can inside factories. 
// If you only need a single instance of something (e.g. the gameboard, the 
// displayController etc.) then wrap the factory inside an IIFE (module pattern) 

// functionality should be able to fit in the game, player or gameboard objects. 
// Take care to put them in “logical” places.

//Focus on getting a working game in the console first. no logic for winning yet

function gameboard() {

   
const board = []


const rows = 3;

const columns = 3;


for (let i = 0; i < rows; i++) {

  board[i] = [];

  for (let j = 0; j < columns; j++) {

    const cell = "";

    board[i].push(cell);

}

}


const placeMarker = function (marker, row, column) {

row = rows - 1;

column = columns - 1;

marker = players().getActivePlayer().marker;

  if (board[row][column] === "") {
    board[row][column] = marker;
  }
}


return {
   getArray: function() {
    
    return board;
  }, printBoard: function() {


  
   return console.log(board);
  
  
  }, placeMarker, rows, columns, board
};


  } 
//gameboard();
 


  function players(player1Name, player2Name) {

    player1Name = "Player One"; 
    player2Name = "Player Two";

    const thePlayers = [{ name: player1Name, marker: 1 }, { name: player2Name, marker: 2 }];


    let activePlayer = thePlayers[0]; // this means Player One with 1 for x as a marker starts first

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === thePlayers[0] ? thePlayers[1] : thePlayers[0];
      };
    
      const getActivePlayer = () => activePlayer;
      

    return { thePlayers, getActivePlayer, switchPlayerTurn } 
  
      
  }
  
 // players(); prints everything twice

  
function gameController (playerNames) {
   
  console.log("Player 1 uses 1 for X and Player 2 uses 2 for O.")

 
 

const player = players();

playerNames = player.thePlayers.name;
  
const pushBoard = gameboard();

const printNewRound = () => {

  pushBoard.printBoard();
  console.log(`${player.getActivePlayer().name}'s turn.`);

  
}
  
 


  

  
 function playRound(row, column, activePlayerNow) {

row = pushBoard.rows;

console.log(row);

const boardArray = pushBoard.getArray();

column = pushBoard.columns;
console.log(column);

activePlayerNow = player.getActivePlayer();

if (boardArray[row - 1][column - 1] !== "") {

  console.log("Already Marked Spot.");
  player.switchPlayerTurn();
} else {
  console.log(`${player.getActivePlayer().name} places an ${player.getActivePlayer().marker} on the board into row ${row}, column ${column}.`);
  pushBoard.placeMarker(player.getActivePlayer().marker, row - 1, column - 1);
}






// switch turns
player.switchPlayerTurn();
printNewRound();

// You should be checking for all winning 3-in-a-rows and ties. 
// You can call your functions and pass arguments to them to play 
// the game yourself and check if everything is working

//const winningCombos = [

//[]

//]



return { row, column, player, activePlayerNow, playerNames };
  
} // play rounds

playRound();

  printNewRound();
 




  return { player, pushBoard, playRound, printNewRound };

}

//gameController();

const game = gameController("Hungry", "Hippo");

game.playRound(1, 1, players().getActivePlayer());
game.playRound(1, 2, players().getActivePlayer());
game.playRound(2, 1, players().getActivePlayer());


