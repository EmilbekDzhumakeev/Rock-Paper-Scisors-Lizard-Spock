"use strict"; 
class Player {
    constructor(name) {
      this.score = 0;
      this.name = name;
    }
  
    rollDie(die) {
      let rollResult = die.generateRandomNumber();
      return rollResult;
    }
  
    rollAllDice(diceArray) {
      let runningTotal = 0;
  
      for(let i = 0; i < diceArray.length; i++) {
        let result = this.rollDie(diceArray[i]);
        runningTotal += result;
      }
  
      return runningTotal;
    }
  }

  module.exports = Player