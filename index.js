var randomNumber1 = Math.floor(Math.random()  * 6 + 1)
var randomNumber2 = Math.floor(Math.random()  * 6 + 1)

var player1_dice_path = "images/dice" +randomNumber1+ ".png"
var player2_dice_path = "images/dice" +randomNumber2+ ".png"

var h1 = document.querySelector("h1");
var img_src = document.querySelectorAll("img");

if (randomNumber1 === randomNumber2) {
  h1.innerHTML = "Draw!"
} else if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "<i class=\"fa-solid fa-flag flag-color\"></i> Player 1  Wins!"
} else {
  h1.innerHTML = "Player 2  Wins! <i class=\"fa-solid fa-flag flag-color\"></i>"
}

img_src[0].setAttribute("src", player1_dice_path)
img_src[1].setAttribute("src", player2_dice_path)
