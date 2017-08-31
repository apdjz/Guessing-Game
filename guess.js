function makeGuess(){
	var guess = document.getElementById("num").value;
	game.prototype.playersGuessSubmission = function(guess);
}
function game(){
	this.pGuess = null;
	this.rand = randomNumberGenerator();
	this.last=[];

}
function startGame(){
	return new game();
}
function randomNumberGenerator(){
 return Math.floor((Math.random() * 2) + 1);
}

game.prototype.closeness = function(){
	return Math.abs(pGuess-rand);
}
game.prototype.isLower = function() {
    return this.pGuess < this.rand;
}

game.prototype.checkGuess = function() {
    if(this.pGuess == this.rand) {
        document.getElementById("status").innerHTML = "You Win";
    }
    else {
        if(this.last.indexOf(this.pGuess) > -1) {
            return 'You have already guessed that number.';
        }
        else {
            this.last.push(this.pGuess);
            if(this.last.length === 5) {
                document.getElementById("status").innerHTML = "You Lose";
            }
            else {
				var entry = document.createElement('li');
				entry.appendChild(document.createTextNode(this.guess));
				unordered.appendChild(entry); 
                var diff = this.closeness();
                if(diff < 10)(
					document.getElementById("status").innerHTML = "Hot";
					document.getElementById("status").style.text-shadow = "0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e";
					document.getElementById("status").style.color = "#FFCC00";
			}
                else if(diff < 25) document.getElementById("status").innerHTML = "Warm";
                else if(diff < 50) document.getElementById("status").innerHTML = "Cold";
                else{
					document.getElementById("status").innerHTML = "Ice Cold";
					document.getElementById("status").style.background-image ="url('ice-background-14140151326az.jpg')";
            }
        }
    }
}
game.prototype.playersGuessSubmission = function(guess) {
    if(typeof guess !== 'number' || guess < 1 || guess > 100) {
        throw "That is an invalid guess.";
    }
    this.pGuess = guess;
    return this.checkGuess();
}

function hint(){
	game.prototype.provideHint = function();
}


game.prototype.provideHint = function() {
    var hintArray = [this.rand, randomNumberGenerator(), randomNumberGenerator()];
    return shuffle(hintArray);
}

function shuffle(arr) { //Fisher-Yates - https://bost.ocks.org/mike/shuffle/
   for(var i = arr.length-1; i > 0; i--) {
       var randomIndex = Math.floor(Math.random() * (i + 1));
       var temp = arr[i];
       arr[i] = arr[randomIndex];
       arr[randomIndex] = temp;
    }
    return arr;
}