var fs = "fs" ;
var inquirer = require("inquirer");
var Letter = require("Letter");

function Word(){
	this.word = word;
	this.numLetter = numLetter;
	this.wordLetters = wordLetters;
	this.attempts = 10;
	this.checkWord = function (){
		if (guessedWord === chosenWord){
			console.log("You got it");
			nextWord();
		}
	}

}

var wordArray = ["Tesla", "Mercedes", "Lexus", "Toyota", "Ferrari", "Chrysler", "Maybach", "Volkswagen"]

module.exports = {Word, wordArray}