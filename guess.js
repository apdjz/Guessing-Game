window.onload = function() {
	startGame();
};

function makeGuess() {
	var guess = parseInt(document.getElementById("num").value);
	game.prototype.playersGuessSubmission(guess);
}
var pGuess = null;
var rand = randomNumberGenerator();
var game = function() {
	window.last = [];
}

function randomNumberGenerator() {
	return Math.floor((Math.random() * 100) + 1);
}

function startGame() {
	return new game();
}
game.prototype.closeness = function() {
	return Math.abs(pGuess - rand);
}
game.prototype.isLower = function() {
	return pGuess < rand;
}
game.prototype.playersGuessSubmission = function(guess) {
	if (typeof guess !== 'number' || guess < 1 || guess > 100) {
		throw "That is an invalid guess.";
	}
	pGuess = guess;
	return this.checkGuess();
}
game.prototype.checkGuess = function() {
	if (pGuess == rand) {
		document.getElementById("status").innerHTML = "You Win!!!";
	} else {
		if (window.last.indexOf(pGuess) > -1) { /* -1 if element not in array*/
			return 'You have already guessed that number.';
		} else {
			window.last.push(pGuess);
			if (window.last.length === 5) {
				document.getElementById("status").innerHTML = "You Lose";
			} else {
				var entry = document.createElement('li');
				entry.appendChild(document.createTextNode(pGuess));
				unordered.appendChild(entry);
				var diff = this.closeness();
				if (diff < 10) {
					document.getElementById("status").innerHTML = "Hot";
					document.getElementById("status").style.textShadow = '0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e';
					document.getElementById("status").style.color = "#FFCC00";
					document.body.style.backgroundImage = "url('./images/smoke-2152833_1920.jpg')";
				} else if (diff < 25){
				  document.getElementById("status").innerHTML = "Warm"; 
				  document.getElementById("status").style.color = "#DC8A93";
				  document.getElementById("status").style.textShadow = "none";
				  document.body.style.backgroundImage = "url('./images/3468811439_48da9e71eb_b.jpg')";
				} 
				else if (diff < 50){
				    document.getElementById("status").innerHTML = "Cold";
				    document.getElementById("status").style.color = "#D4F0FF";
				    document.getElementById("status").style.textShadow = "none";
				    document.body.style.backgroundImage = "url('./images/ice-background-14140151326az.jpg')";
				}
				else {
					document.getElementById("status").innerHTML = "Ice Cold";
					document.getElementById("status").style.textShadow = "none";
					document.getElementById("status").style.color = "#5D8AA8";
					document.body.style.backgroundImage = "url('./images/ice-background-14140151326az.jpg')";
				}
			}
		}
	}
}

function hint() {
	game.prototype.provideHint();
}
game.prototype.provideHint = function() {
	var hintArray = [rand, randomNumberGenerator(), randomNumberGenerator(), randomNumberGenerator(), randomNumberGenerator()];
	return shuffle(hintArray);
}

function shuffle(arr) { //Fisher-Yates - https://bost.ocks.org/mike/shuffle/
	for (var i = arr.length - 1; i > 0; i--) {
		var randomIndex = Math.floor(Math.random() * (i + 1));
		var temp = arr[i];
		arr[i] = arr[randomIndex];
		arr[randomIndex] = temp;
	}
	document.getElementById("hint").innerHTML = "The number is one of these five numbers: " + arr;
	return arr;
}
