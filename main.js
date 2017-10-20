var fs = require ("fs");
var Letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require("inquirer")


console.log("Welcome to Hangman by Node !!! (The Auto-Maker Version)");
console.log("--------------------------------------------------------"+"\n");


var wordArray = ["Tesla", "Mercedes", "Lexus", "Toyota", "Ferrari", "Chrysler", "Maybach", "Volkswagen"]
// variable holds a number of blanks left
var numberBlanks;


var wrongGuesses = [];
var lossCounter = 0;


var tesla = ["t", "e", "s", "l", "a"];
var displayedWord = ["t", "e", "_", "_", "_"];
console.log(displayedWord);
var guessedLetters = [];
var initialWord = ["t", "e"]


inquirer.prompt([
	{
		type:"input",
		name:"guessedLetters1",
		message:"Choose a letter",

	},{
		type:"input",
		name:"guessedLetters2",
		message:"Choose another letter",
	},{
		type:"input",
		name:"guessedLetters3",
		message:"Choose Another One"
	}
	]).then(function game (answer){
		guessedLetters.push(answer.guessedLetters1,answer.guessedLetters2,answer.guessedLetters3);
		
		var finalWord = initialWord.concat(guessedLetters);

		if (finalWord = tesla){
			console.log("Word is " + wordArray[0] + ", Good Job");
		} else {
			console.log("no words");
		}

		console.log(finalWord);
		// console.log(tesla);

		
	})



// if (guessed === 0){
// 	console.log("That letter isnt in this word");
// 	this.attempts --;
// } else {
// 	console.log("Nice, Guess another letter")
// }