"use strict";
const Player = require('./player');
class Human extends Player{
    constructor(name) { 
        super(name) 
      
        } 
        pickGesture(index){
            this.gestureChoice = this.gesture[index-1];
            
          }
            
    } 
   
        
module.exports = Human;
