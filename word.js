// verify connection to wordjs
console.log("connected to WordJS");

var fs = require("fs") ;
var inquirer = require("inquirer");



var word = function (){
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

module.exports = {word, wordArray}