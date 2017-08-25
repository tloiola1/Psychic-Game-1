//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = null;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
    // String.fromCharCode converts a number into a character from an array
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	document.getElementById("guesses-made").innerHTML = userGuess;

    if (userGuess !== computerChoices) {
        guessesLeft--;
        losses ++;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses-left").innerHTML = guessesLeft ;
    }
    if (userGuess == computerGuess) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
    }

    if (guessesLeft == 0) {
        guessesLeft = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * (computerChoices.length))];

    }
}
