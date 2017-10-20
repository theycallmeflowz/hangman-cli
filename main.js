var fs = require ("fs");
var Letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require("inquirer")


console.log("Welcome to Hangman by Node !!! (The Auto-Maker Version)");
console.log("--------------------------------------------------------"+"\n");


var wordArray = ["Tesla", "Mercedes", "Lexus", "Toyota", "Ferrari", "Chrysler", "Maybach", "Volkswagen"]
var wins = 0;
var losses = 0;

start();


function start(){ 

var carname = ["t", "e", "s", "l", "a"];
var displayedWord = ["t", "e", "_", "_", "_"];
var initialWord = ["t", "e"]
console.log(displayedWord);


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
		
		initialWord.push(answer.guessedLetters1,answer.guessedLetters2,answer.guessedLetters3);

		// var finalWord = initialWord.concat(guessedLetters);

		if (JSON.stringify(initialWord) == JSON.stringify(carname)){
			console.log("The Word is " + wordArray[0] + ", Good Job");
			wins++;
		} else {
			console.log("You Guessed Wrong" + "\n");
			losses++;
		}

		console.log("\n" + "wins: " + wins);
		console.log("\n" + "losses: " + losses);
		secondWord();
	
	})

}


function secondWord (){

console.log("\n")
console.log("**************NEXT WORD******************");
console.log("-----------------------------------------" + "\n")

var carname = ["t", "o", "y", "o", "t", "a"];
var displayedWord = ["t", "o", "y", "_", "_", "_"];
var initialWord = ["t", "o", "y"];
console.log(displayedWord);


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
		message:"Choose Another One",
	}
	]).then(function game (answer){
		
		initialWord.push(answer.guessedLetters1,answer.guessedLetters2,answer.guessedLetters3);

		// var finalWord = initialWord.concat(guessedLetters);

		if (JSON.stringify(initialWord) == JSON.stringify(carname)){
			console.log("\n" + "The Word is " + wordArray[3] + ", Good Job");
			wins++;
		} else {
			console.log("\n" + "You Guessed Wrong" + "\n");
			losses++;
		}

		console.log("\n" + "wins: " + wins);
		console.log("\n" + "losses: " + losses);
		thirdWord();
	
	})

}



function thirdWord (){

console.log("\n")
console.log("**************NEXT WORD******************");
console.log("-----------------------------------------" + "\n")

var carname = ["m", "e", "r", "c", "e", "d", "e", "s"];
var displayedWord = ["m", "e", "r", "c", "_", "_", "_", "_"];
var initialWord = ["m", "e", "r", "c"];
console.log(displayedWord);


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
		message:"Choose Another One",
	},{
		type:"input",
		name:"guessedLetters4",
		message:"And The Last Guess"
	}
	]).then(function game (answer){
		
		initialWord.push(answer.guessedLetters1,answer.guessedLetters2,answer.guessedLetters3,answer.guessedLetters4);

		// var finalWord = initialWord.concat(guessedLetters);

		if (JSON.stringify(initialWord) == JSON.stringify(carname)){
			console.log("\n" + "The Word is " + wordArray[1] + ", Good Job");
			wins++;
		} else {
			console.log("\n" + "You Guessed Wrong" + "\n");
			losses++
		}

		console.log("\n" + "wins: " + wins);
		console.log("\n" + "losses: " + losses);
		forthWord();
	})

}


function forthWord (){

console.log("\n")
console.log("**************NEXT WORD******************");
console.log("-----------------------------------------" + "\n")

var carname = ["v", "o", "l", "k", "s", "w", "a", "g", "e", "n"];
var displayedWord = ["v", "o", "l", "k", "s", "w", "_", "_", "_", "_"];
var initialWord = ["v", "o", "l", "k", "s", "w"];
console.log(displayedWord);


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
		message:"Choose Another One",
	},{
		type:"input",
		name:"guessedLetters4",
		message:"And The Last Guess"
	}
	]).then(function game (answer){
		
		initialWord.push(answer.guessedLetters1,answer.guessedLetters2,answer.guessedLetters3,answer.guessedLetters4);

		// var finalWord = initialWord.concat(guessedLetters);

		if (JSON.stringify(initialWord) == JSON.stringify(carname)){
			console.log("\n" + "The Word is " + wordArray[7] + ", Good Job");
			wins++;
		} else {
			console.log("\n" + "You Guessed Wrong" + "\n");
			losses++;
		}
		
		console.log("\n" + "You got " + wins + " out of 4 word(s) right");
	})

}
