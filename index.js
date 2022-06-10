// document.querySelector("h1").style.color = "yellow";


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var newDice1 = "dice" + randomNumber1 + ".png";
var newDice2 = "dice" + randomNumber2 + ".png";

var newPath1 = "images/" + newDice1;
var newPath2 = "images/" + newDice2;

// changing the dice
document.querySelector(".dice .img1").src = newPath1;
document.querySelector(".dice .img2").src = newPath2;

// Changing the message

if (randomNumber1 > randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}

else{
  document.querySelector(".container h1").innerHTML = "Draw!";
}
