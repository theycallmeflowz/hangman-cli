// verify connection to Letterjs
console.log("connected to LettersJS");

var fs = require("fs");
var inquirer = require("inquirer");



//Letter Construction Function
function Letter()
{
    this.letter = letter;
    this.shown = false;
    this.guessedLetters = guessedLetters;
    this.initialWord = function (){
    
            return !(this.shown)? "_" : this.letter;
        
    };
};



module.exports = Letter;