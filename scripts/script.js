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

   
let board = { row1: [0, 0, 0], row2: [0, 0, 0], row3: [0, 0, 0] };
console.log(board);



/*
console.log(board);
console.log(board.row1);
console.log(board.row2);
console.log(board.row3); // this prints the original board so maybe it's overwriting?
*/

const row1column1 = board.row1[0];


return {
  pushToArray: function(value) {

    

if (row1column1 === 0) { // to check if array is filled with a 0
  board.row1.splice(0, 1, value);

}

return value;
    
  },
  getArray: function() {
    
    return board;
  }, printBoard: function() {

    

    let boardrow1 = board.row1;
    let boardrow2 = board.row2;
    let boardrow3 = board.row3;
  
    console.log(boardrow1);
    console.log(boardrow2);
    console.log(boardrow3);

   
    /*
    console.log(board.row1);
    console.log(board.row2);
    console.log(board.row3);
    */

    return { boardrow1, boardrow2, boardrow3 };
  
  }
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
      

    return { getActivePlayer, switchPlayerTurn } 
  
      
  }
  
 // players(); prints everything twice

  






function gameController () {
   


  
  //const board = gameboard(); // [];

const player = players();
  

  
  console.log("Player 1 uses 1 for X and Player 2 uses 2 for O.")

  console.log(`${player.getActivePlayer().name}'s turn.`);

  //console.log(player.getActivePlayer()); // yes correct player1

  console.log(`${player.getActivePlayer().name} places an ${player.getActivePlayer().marker} on the board`);

  //console.log(player.getActiveMarker()); // yes correct 1
   
  const pushBoard = gameboard();

  pushBoard.pushToArray(player.getActivePlayer().marker);
  console.log(pushBoard.getArray());

  
  console.log(pushBoard.printBoard()); // does it print the original array? no

  
  takeTurns();

  function takeTurns() {




for (i = 0; i < 8; i++) {

   // don't put login in if statements. everything is navigating from before the statements.
  //turn;
  player.switchPlayerTurn();

console.log(`${player.getActivePlayer().name}'s turn.`);

  console.log(`${player.getActivePlayer().name} places an ${player.getActivePlayer().marker} on the board`);
playRound();

  console.log(pushBoard.printBoard()); 
  
  

 function playRound() {

  /*
  const row1column1 = pushBoard.getArray().row1[0];
  const row1column2 = pushBoard.getArray().row1[1];
  const row1column3 = pushBoard.getArray().row1[2];

  const row2column1 = pushBoard.getArray().row2[0];
  const row2column2 = pushBoard.getArray().row2[1];
  const row2column3 = pushBoard.getArray().row2[2];

  const row3column1 = pushBoard.getArray().row3[0];
  const row3column2 = pushBoard.getArray().row3[1];
  const row3column3 = pushBoard.getArray().row3[2];

  */

// You should be checking for all winning 3-in-a-rows and ties. 
// You can call your functions and pass arguments to them to play 
// the game yourself and check if everything is working

// maybe i need a for loop to iterate over the array
// what is the array now?

column = 3;

const row1 = pushBoard.getArray().row1;
const row2 = pushBoard.getArray().row2;
const row3 = pushBoard.getArray().row3;

const newboardArrays = [row1, row2, row3];

function sqNotTaken(value) {
  value;
  return value === 1 || value === 2;
}


let availableCells = newboardArrays.filter(sqNotTaken);
    


console.log(availableCells);

    if (!availableCells.length) return;




for (j = 0; j < 3; j++) {
newboardArrays[j]; 
  for (k = 0; k < 3; k++) {

    newboardArrays[j];
    //newboardArrays.splice(newboardArrays.indexOf(newboardArrays[j]), 1, player.getActivePlayer().marker);

console.log(newboardArrays);
console.log(newboardArrays[j]);

   // console.log(newboardArrays);


    /*
if (row1column1 === 0) {
 // pushBoard.getArray().row1.splice(0, 1, player.getActivePlayer().marker);
 newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
  

  if (row1column1 === 1 || row1column1 === 2) {
    newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
    
   // pushBoard.getArray().row1.splice(1, 1, player.getActivePlayer().marker);
    
  }
}
  else if (row1column2 === 0) {
   
    newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
   // pushBoard.getArray().row1.splice(1, 1, player.getActivePlayer().marker);
    


    if (row1column2 === 1 || row1column2 === 2) {
      newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
     // pushBoard.getArray().row1.splice(2, 1, player.getActivePlayer().marker);
      
  
    }

  
  } else if (row1column3 === 0) {
    newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
   // pushBoard.getArray().row1.splice(2, 1, player.getActivePlayer().marker);
    

    if (row1column3 === 1 || row1column3 === 2) {

      newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
     // pushBoard.getArray().row2.splice(0, 1, player.getActivePlayer().marker);
   
  
    }

  } else if (row2column1 === 0) {
    newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
   // pushBoard.getArray().row2.splice(0, 1, player.getActivePlayer().marker);
    

    if (row2column2 === 1 || row2column2 === 2) {
      newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
     // pushBoard.getArray().row2.splice(1, 1, player.getActivePlayer().marker);
     
  
    }
  
  } else if (row2column2 === 0) {
    newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
   // pushBoard.getArray().row2.splice(1, 1, player.getActivePlayer().marker);
    

    if (row2column2 === 1 || row2column2 === 2) {
      newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
     // pushBoard.getArray().row2.splice(2, 1, player.getActivePlayer().marker);
      
  
    }
  
  } else if (row2column3 === 0) {
    newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
   // pushBoard.getArray().row2.splice(2, 1, player.getActivePlayer().marker);
    

    if (row2column3 === 1 || row2column3 === 2) {
      newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
     // pushBoard.getArray().row3.splice(0, 1, player.getActivePlayer().marker);
     
  
    }

  } else if (row3column1 === 0) {
    newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
   // pushBoard.getArray().row3.splice(0, 1, player.getActivePlayer().marker);
  

    if (row3column2 === 1 || row3column2 === 2) {
      newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
    //  pushBoard.getArray().row3.splice(1, 1, player.getActivePlayer().marker);
     
  
    }
  
  } else if (row3column2 === 0) {
    newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
   // pushBoard.getArray().row3.splice(1, 1, player.getActivePlayer().marker);
    

    if (row3column2 === 1 || row3column2 === 2) {
      newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
     // pushBoard.getArray().row3.splice(2, 1, player.getActivePlayer().marker);
      
  
    }
  
  } else if (row3column3 === 0) {
    newboardArray[j].splice(newboardArray.indexOf(newboardArray[j]), 1, player.getActivePlayer().marker);
   // pushBoard.getArray().row3.splice(2, 1, player.getActivePlayer().marker);
    
      if (row3column3 === 1 || row3column3 === 2) {
   console.log("Game Over");
  } 
} 
 else {
    return;
  } */
  
  } // second for loop

  } // for loop
  
} // play rounds
  
} // for loop

} // end of turns




 // } //end of turns
  
 




  return { player, pushBoard };

}

gameController();

//const game = GameController();