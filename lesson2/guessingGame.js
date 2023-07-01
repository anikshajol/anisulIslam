var numberOfWon = 0;
var numberOfLost = 0;

for (var i = 1; i <= 5; i++) {
  var guessingNumber = 3;
  var randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guessingNumber === randomNumber) {
    console.log("You Won");
    numberOfWon++;
  } else {
    console.log("You lost, Random Number:", randomNumber);
    numberOfLost++;
  }
}

console.log(numberOfWon);
console.log(numberOfLost);
