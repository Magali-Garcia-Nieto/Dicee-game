var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1 * 6;
    randomNumber1 = Math.floor(randomNumber1)+1;

var randomNumber2 = Math.random();
    randomNumber2 = randomNumber2 * 6;
    randomNumber2 = Math.floor(randomNumber2)+1;

// var arrOfSrcs = [
//   "images/dice1.png",
//   "images/dice2.png",
//   "images/dice3.png",
//   "images/dice4.png",
//   "images/dice5.png",
//   "images/dice6.png",
// ];

// var randomSrc = arrOfSrcs[randomNumber1];

var randomSrc1 = "images/dice" + randomNumber1 + ".png";
var randomSrc2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelector("img.img1");
image1.setAttribute("src", randomSrc1);

var image2 = document.querySelector("img.img2");
image2.setAttribute("src", randomSrc2);

// THIS CODE DIDN´T WORK AND I DON´T KNOW WHY
// var winMessage =  document.querySelector("div.container h1").innerHTML;
//
// if (randomNumber1 === randomNumber2) {
//   winMessage = "Draw";
// } else if (randomNumber1 > randomNumber2) {
//   winMessage = "Player 1 wins!";
// } else if (randomNumber1 < randomNumber2) {
//   winMessage = "Player 2 wins!";
// }

// SO I DECIDED TO WRITE THIS CODE, A LITTLE BIT LONGER BUT THIS ONE DOES WORK
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
 } else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
 }
