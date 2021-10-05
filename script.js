"use strict";

var secretNum = Math.floor(Math.random() * 10 + 1);
var score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  var guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "❗ Please Enter a Number";
  } else if (guess === secretNum) {
    document.querySelector(".message").textContent = "🎉 Correct Answer";
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").textContent = secretNum;
    document.querySelector(".number").style.width = "32rem";
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 GAME OVER!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 GAME OVER!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNum = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing again...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
