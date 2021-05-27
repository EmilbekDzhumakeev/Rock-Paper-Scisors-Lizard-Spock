"use strict"; 
   //////////////// Import ////////////////////////////////////////////////////
const Player = require('./classes/player'); 
const Ai = require('./classes/ai');
const Human = require('./classes/human');
const prompt = require('prompt-sync')();

class Game {
    constructor() { 
        this.playerOne = new Player;
        this.playerTwo = new Ai; 
        this.playerThree = new Human;
        let p1, p2 = 0;

     
    } 

  ////////////////////////////////////////////////////////////////////////////
    runGame() {  // "main" method
      
        this.displayRules();
        this.playerOne.showOptions(); 
        this.playAi(); 

        this.playHuman();

    }
   ////////////////////////////////////////////////////////////////////////////
    displayRules() { 
      console.log("---------- Welcome to the R-P-S-L-R Game! ----------")
      console.log("Rules: Two players will choose from array of getures")
      console.log("       Each gesture can beat or be beaten by two gestures");
      console.log("       The first player to win three rounds will win the game!");
    
    }
   ////////////////////////////////////////////////////////////////////////////
    displayGameWinner(counter) {  
        let p1, p2;
        if (counter === "oneCounter"){
                p1++;
        } else {p2++;} 

        if (p1 === 3){
            console.log("Player One won the game! ");
            return "gameOver";
        } else if (p2 === 3){
            console.log("Player Two won the game! ");
            return "gameOver";
        }
     
  }
 ////////////////////////////////////////////////////////////////////////////
 playAi(){   
     let round;
   while (round!=="gameOver"){
     let index = parseInt(prompt("Player One Pick gesture: ")); 
     let hand1 = this.playerOne.pickGesture(index);
     let hand2 = this.playerTwo.pickGesture();
     console.log("Player one picked: "+ hand1);
     console.log("Ai picked: "+ hand2);
    round = this.displayGameWinner(this.whoWon(hand1, hand2)); 
 }
 }
 
 ///////////////////////////////////////////////////////////////////////////
 playHuman(){
    let index = parseInt(prompt("Player One Pick gesture: "));
    let index2 = parseInt(prompt("Player Two Pick gesture: ")); 
    let hand1 = this.playerOne.pickGesture(index);
    let hand2 = this.playerThree.pickGesture(index2);
    console.log("Player one picked: "+ hand1); 
    console.log("Player two picked: "+ hand2);
}
///////////////////////////////////////////////////////////////////////////
whoWon(hand1,hand2){  
   // while (oneCounter < 4 || twoCounter < 4){
    if (hand1 === hand2){
        console.log("Its a tie!");
    } else if (hand1==="Rock" && hand2==="Scissors"){
        console.log("Rock crushes Scissors ");
        console.log("Player One won !"); 
        return "oneCounter";
    } else if (hand1==="Scissors" && hand2==="Paper"){
        console.log("Scissors cuts Paper");
        console.log("Player One won !"); 
        return "oneCounter";
    } else if (hand1==="Paper" && hand2==="Rock"){
        console.log("Paper covers Rock");
        console.log("Player One won !");
        return  "oneCounter";
    } else if (hand1==="Rock" && hand2==="Lizard"){
        console.log("Rock crushes Lizard");
        console.log("Player One won !");
        return "oneCounter";
    } else if (hand1==="Lizard" && hand2==="Spock"){
        console.log("Rock crushes Lizard");
        console.log("Player One won !");
        return "oneCounter";
    } else if (hand1==="Spock" && hand2==="Scissors"){
        console.log("Spock smashes Scissors ");
        console.log("Player One won !"); 
        return "oneCounter";
    } else if (hand1==="Scissors" && hand2==="Lizard"){
        console.log("Scissors decapitates Lizard");
        console.log("Player One won !"); 
        return "oneCounter";
    } else if (hand1==="Lizard" && hand2==="Paper"){
        console.log("Lizard eats Paper ");
        console.log("Player One won !");
        return "oneCounter";
    } else if (hand1==="Paper" && hand2==="Spock"){
        console.log("Paper disproves Spock");
        console.log("Player One won !");
        return "oneCounter";
    } else if (hand1==="Spock" && hand2==="Rock"){
        console.log("Spock vaporizes Rock ");  
        console.log("Player One won !");
        return "oneCounter";
    } else {console.log("Player Two won !");
        return "twoCounter";}



}
}
 
module.exports = Game