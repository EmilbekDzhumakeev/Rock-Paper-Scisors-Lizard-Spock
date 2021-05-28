"use strict"; 
   //////////////// Import ////////////////////////////////////////////////////
const Player = require('./classes/player'); 
const Ai = require('./classes/ai');
const Human = require('./classes/human');
const prompt = require('prompt-sync')();

class Game {
    constructor() {  

        this.playerOne = new Human;
        this.playerTwo = new  Ai;
      
   
     
    } 

  ////////////////////////////////////////////////////////////////////////////
    runGame() {  // "main" method
      
        this.displayRules();
        this.playerOne.showOptions(); 
        this.whichGameMode();
        // this.playAi(); 
        //this.playHuman();
        this.displayGameWinner();
       
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
        if (this.playerOne.score > this.playerTwo.score){
            console.log("\nPlayer One won the GAME!");
        } else console.log("\nPlayer Two won the GAME!");
        
  }
 ////////////////////////////////////////////////////////////////////////////
 playAi(){   
    
   while (this.playerTwo.score < 3 && this.playerOne.score < 3){
     let index = parseInt(prompt("\nPlayer One Pick gesture: ")); 
    this.playerOne.pickGesture(index); 
    this.playerTwo.pickGesture();
     console.log("Player One picked: "+ this.playerOne.gestureChoice);
     console.log("Player Two (Ai) picked: "+ this.playerTwo.gestureChoice);
    this.whoWon(this.playerOne.gestureChoice, this.playerTwo.gestureChoice);  

    console.log("Player One score: "+ this.playerOne.score);
    console.log("Player Two score: "+ this.playerTwo.score);

 }
 }
 
 ///////////////////////////////////////////////////////////////////////////
 playHuman(){ 
    this.playerTwo = new Human; 
    console.log("Player One score: "+ this.playerOne.score);
    console.log("Player Two score: "+ this.playerTwo.score);  

    while (this.playerTwo.score < 3 && this.playerOne.score < 3){
    let index = parseInt(prompt("\nPlayer One Pick gesture: "));
    let index2 = parseInt(prompt("Player Two Pick gesture: ")); 
    this.playerOne.pickGesture(index);
    this.playerTwo.pickGesture(index2);
    console.log("Player one picked: "+ this.playerOne.gestureChoice); 
    console.log("Player two picked: "+ this.playerTwo.gestureChoice);
    this.whoWon(this.playerOne.gestureChoice, this.playerTwo.gestureChoice);  

    console.log("Player One score: "+ this.playerOne.score);
    console.log("Player Two score: "+ this.playerTwo.score); 
} 
}
///////////////////////////////////////////////////////////////////////////
whoWon(hand1,hand2){  

    if (hand1 === hand2){
        console.log("Its a tie!");
    } else if (hand1==="Rock" && hand2==="Scissors"){
        console.log("Rock crushes Scissors ");
        console.log("Player One won !");   
        this.playerOne.score++;  
    } else if (hand1==="Scissors" && hand2==="Paper"){
        console.log("Scissors cuts Paper");
        console.log("Player One won !"); 
        this.playerOne.score++;  
    } else if (hand1==="Paper" && hand2==="Rock"){
        console.log("Paper covers Rock");
        console.log("Player One won !");
        this.playerOne.score++;  
    } else if (hand1==="Rock" && hand2==="Lizard"){
        console.log("Rock crushes Lizard");
        console.log("Player One won !");
        this.playerOne.score++;  
    } else if (hand1==="Lizard" && hand2==="Spock"){
        console.log("Rock crushes Lizard");
        console.log("Player One won !");
        this.playerOne.score++;  
    } else if (hand1==="Spock" && hand2==="Scissors"){
        console.log("Spock smashes Scissors ");
        console.log("Player One won !"); 
        this.playerOne.score++;  
    } else if (hand1==="Scissors" && hand2==="Lizard"){
        console.log("Scissors decapitates Lizard");
        console.log("Player One won !"); 
        this.playerOne.score++;  
    } else if (hand1==="Lizard" && hand2==="Paper"){
        console.log("Lizard eats Paper ");
        console.log("Player One won !");
        this.playerOne.score++;  
    } else if (hand1==="Paper" && hand2==="Spock"){
        console.log("Paper disproves Spock");
        console.log("Player One won !");
        this.playerOne.score++;  
    } else if (hand1==="Spock" && hand2==="Rock"){
        console.log("Spock vaporizes Rock ");  
        console.log("Player One won !");
        this.playerOne.score++;  
    } 
    ///////////////////////////// reverse  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
   
 else if (hand2==="Rock" && hand1==="Scissors"){
    console.log("Rock crushes Scissors ");
    console.log("Player Two won !");   
    this.playerTwo.score++;  
} else if (hand2==="Scissors" && hand1==="Paper"){
    console.log("Scissors cuts Paper");
    console.log("Player Two won !");  
    this.playerTwo.score++;  
} else if (hand2==="Paper" && hand1==="Rock"){
    console.log("Paper covers Rock");
    console.log("Player Two won !"); 
    this.playerTwo.score++;  
} else if (hand2==="Rock" && hand1==="Lizard"){
    console.log("Rock crushes Lizard");
    console.log("Player Two won !"); 
    this.playerTwo.score++;  
} else if (hand2==="Lizard" && hand1==="Spock"){
    console.log("Rock crushes Lizard");
    console.log("Player Two won !"); 
    this.playerTwo.score++;  
} else if (hand2==="Spock" && hand1==="Scissors"){
    console.log("Spock smashes Scissors ");
    console.log("Player Two won !"); 
    this.playerTwo.score++;  
} else if (hand2==="Scissors" && hand1==="Lizard"){
    console.log("Scissors decapitates Lizard");
    console.log("Player Two won !"); 
    this.playerTwo.score++;  
} else if (hand2==="Lizard" && hand1==="Paper"){
    console.log("Lizard eats Paper ");
    console.log("Player Two won !"); 
    this.playerTwo.score++;  
} else if (hand2==="Paper" && hand1==="Spock"){
    console.log("Paper disproves Spock");
    console.log("Player Two won !"); 
    this.playerTwo.score++;  
} else if (hand2==="Spock" && hand1==="Rock"){
    console.log("Spock vaporizes Rock ");  
    console.log("Player Two won !"); 
    this.playerTwo.score++; 
} 


} 
/////////////////////////////////////////////////////////////////////////// 
whichGameMode(){  
    let mode = prompt("Choose GAME Mode: 1-PLAY AI , 2-PLAY HUMAN: "); 
    if (mode === "1"){
        this.playAi();  
        //return Ai;
    } else if (mode === "2"){
        this.playHuman();
       // return Human;
    } else {console.log("Invalide entry!");}

}
}
 
module.exports = Game