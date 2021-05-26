"use strict"; 
class Player {
    constructor(name) {
      this.score = 0;
      this.name = name; 
      this.gesture = ["Rock", "Paper", "Scisors", "Lizard", "Spock"]
    }
  showOptions(){
    console.log("\nGesture options: 1-Rock, 2-Paper, 3-Scisors, 4- lizard, 5-Spock\n");

  } 
  pickGesture(index){
    let hand = this.gesture[index+1];
     return hand;
  }
    
  } 

  module.exports = Player