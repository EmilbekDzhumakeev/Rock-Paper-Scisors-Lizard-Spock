"use strict"; 
   //////////////// Import ////////////////////////////////////////////////////
const Player = require('./classes/player');


class Game {
    constructor() { 
        this.playerOne = new Player;
        this.playerTwo = new Player;
        
     
    } 

  ////////////////////////////////////////////////////////////////////////////
    runGame() {  // "main" method
      
        this.displayRules();
        this.playerOne.showOptions(); 
        

    }
   ////////////////////////////////////////////////////////////////////////////
    displayRules() { 
      console.log("---------- Welcome to the R-P-S-L-R Game! ----------")
      console.log("Rules: Two players will choose from array of getures")
      console.log("       Each gesture can beat or be beaten by two gestures");
      console.log("       The first player to win three rounds will win the game!");
    
    }
   ////////////////////////////////////////////////////////////////////////////
    displayGameWinner() {
     
  }
 ////////////////////////////////////////////////////////////////////////////
} 
module.exports = Game