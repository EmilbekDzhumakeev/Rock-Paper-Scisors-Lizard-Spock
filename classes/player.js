"use strict"; 
class Player {
    constructor(name) {
      this.score = 0;
      this.name = name; 
      this.gesture = ["Rock", "Paper", "Scissors", "Lizard", "Spock"] 
      this.gestureChoice;
    }
  showOptions(){
    console.log("\nGesture options: 1-Rock, 2-Paper, 3-Scisors, 4- lizard, 5-Spock\n");

  } 
  pickGesture(){  
  }
    
  } 

  module.exports = Player