// verify connection to Letterjs
console.log("connected to LettersJS");

var fs = require("fs");
var inquirer = require("inquirer");



//Letter Construction Function
function Letter()
{
    this.letter = letter;
    this.guessedLetters = guessedLetters;
    this.display = function (){
        if (this.guessed){
            return this.letter
        } else {
            return "_";
        }
    }
}



module.exports = Letter;