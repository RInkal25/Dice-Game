var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImage = "dice" + randomNumber1 + ".png"; // dice1.png-dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}