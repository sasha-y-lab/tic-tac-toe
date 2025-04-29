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

   
const board = { row1: [0, 0, 0], row2: [0, 0, 0], row3: [0, 0, 0] };

//console.log(board);
const row1column1 = board.row1[0];
const row1column2 = board.row1[1];
const row1column3 = board.row1[2];

const row2column1 = board.row2[0];
const row2column2 = board.row2[1];
const row2column3 = board.row2[2];

const row3column1 = board.row3[0];
const row3column2 = board.row3[1];
const row3column3 = board.row3[2];



return {
  pushToArray: function(value) {

if (row1column1.length === 0) { // to check if array is empty
  row1column1.splice(0, 1, value);

} else if (row1column2.length === 0) {
  row1column2.splice(1, 1, value);

} else if (row1column3.length === 0) {
  row1column3.splice(2, 1, value);
} else {
  return;
}

if (row2column1.length === 0) {
  row2column1.splice(0, value, 1);

} else if (row2column2.length === 0) {
  row2column2.splice(1, 1, value);

} else if (row2column3.length === 0) {
  row2column3.splice(2, 1, value);
} else {
  return;
}

if (row3column1.length === 0) {
  row3column1.splice(0, 1, value);

} else if (row3column2.length === 0) {
  row3column2.splice(1, 1, value);

} else if (row3column3.length === 0) {
  row3column3.splice(2, 1, value);
} else {
  return;
}
    
    
  },
  getArray: function() {
    return board;
  }, printBoard: function() {

    console.log(board.row1);
    console.log(board.row2);
    console.log(board.row3);
  }
};


  } 
//gameboard();
 


  function players(player1Name, player2Name) {

    player1Name = "Player One"; 
    player2Name = "Player Two";

    const thePlayers = [{ name: player1Name, marker: 1 }, { name: player2Name, marker: 2 }];

    const player1 = thePlayers[0].name;

    // console.log(player1); prints the right name

    const player2 = thePlayers[1].name;

    // console.log(player2);

    const player1Marker = thePlayers[0].marker;
   // console.log(player1Marker); prints the right marker

    const player2Marker = thePlayers[1].marker;
    //console.log(player2Marker);

    const getActivePlayer = () => {
      
      return player1;
    }

    const getActiveMarker = () => {
      return player1Marker;
    }

    

    const switchPlayerTurn = () => {

     getActivePlayer() = getActivePlayer() === player1 ? player2 : player1; 
      getActiveMarker() = getActiveMarker() === player1Marker ? player2Marker: player1Marker;

      return { getActiveMarker, getActivePlayer };

    }

    return { getActivePlayer, getActiveMarker, switchPlayerTurn } 
  
      
  }
  
 // players(); prints everything twice

  






function gameController () {
   


  
  //const board = gameboard(); // [];

const player = players();
  

  
  console.log("Player 1 uses 1 for X and Player 2 uses 2 for O.")

  console.log(`${player.getActivePlayer()}'s turn.`);

  console.log(`${player.getActivePlayer()} places an ${player.getActiveMarker()} on the board`);
   
  const pushBoard = gameboard();

  pushBoard.pushToArray(player.getActiveMarker());
  console.log(pushBoard.getArray());
  


 // return board;

}

gameController();

//const game = GameController();