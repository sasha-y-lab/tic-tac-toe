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

function gameboard() {

   
const board = { row1: ["", "", ""], row2: ["", "", ""], row3: ["", "", ""] };

//console.log(board);

const printBoard = () => {

  console.log(board.row1);
  console.log(board.row2);
  console.log(board.row3);
}

printBoard();

return {
  pushToArray: function(value) {
    board.row1.push(value);
    board.row2.push(value);
    board.row3.push(value);
  },
  getArray: function() {
    return board;
  }, printBoard
};

   
//return printBoard;

  } 
gameboard();
 


  function players(player1Name, player2Name) {

    player1Name = "Player One"; 
    player2Name = "Player Two";

    const thePlayers = [{ name: player1Name, marker: "x" }, { name: player2Name, marker: "o" }];

    const getActivePlayer = () => thePlayers[0];

    //const getMarker = () => thePlayers[0].marker;

    const switchPlayerTurn = () => {

      getActivePlayer() = getActivePlayer() === thePlayers[0] ? thePlayers[1] : thePlayers[0];

    }

    console.log(`${getActivePlayer().name}'s turn.`);

    console.log(`${getActivePlayer().name} places an ${getActivePlayer().marker} on the board`);



    const pushBoard = gameboard();

    pushBoard.pushToArray(getActivePlayer().marker);
    console.log(pushBoard.getArray());
    


    return { getActivePlayer, switchPlayerTurn };

    
  }

  players();






function GameController () {
   


  
  const board = gameboard(); // [];


  
  
   
    
  

  return board;

}

GameController();

//const game = GameController();