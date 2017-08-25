//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var userGuess = null;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " guessedLetters " + guessedLetters );


document.onkeyup = function(event) {
    // String.fromCharCode converts a number into a character from an array
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	document.getElementById("guesses-made").innerHTML +=  event.key;

    //indexOf locates values in an array
    if (guessedLetters.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
        guessedLetters[guessedLetters.length] = userGuess;
        guessesLeft--;
        document.getElementById("guessedLetters").innerHTML += event.key;
    }
    // == checks if a value is equal to another value
    if (computerGuess == guessedLetters) {
        wins++;
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " guessedLetters " + guessedLetters );
        document.getElementById("losses").innerHTML += event.key
    }

    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
        guessedLetters = [];
        computerGuess = computerChoices[Math.floor(Math.random() * (computerChoices.length))];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " guessedLetters " + guessedLetters);
        document.getElementById("guesses-left").innerHTML += event.key
    }
}




