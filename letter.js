var fs = require ("fs");
var inquirer = require("inquirer");
var Word = require("Word");

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