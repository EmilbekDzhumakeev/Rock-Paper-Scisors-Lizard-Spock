" use strict";
const Player = require('./player');
class Ai extends Player{
    constructor(name) { 
    super(name) 
    } 
    pickGesture(){ 
        let i = Math.floor(Math.random() * 5); 
        let hand = this.gesture[i];
         return hand;
      } 
    }
module.exports = Ai
