var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var buttonColours = ["red", "blue", "green", "yellow"];
var randomNumber;
var randomChosenColour;
function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  setTimeout(() => {
    var sound = new Audio("./sounds/" + randomChosenColour + ".mp3");
    buttonAnimation(randomChosenColour);
    sound.play();
  }, 750);

  level++;
  $("h1").text("level:" + level);
  userClickedPattern = [];
}

document.addEventListener("keydown", function () {
  if (
    $("h1").text() === "Press A Key to Start" ||
    $("h1").text() === "Game Over, Press Any Key to Restart"
  ) {
    gamePattern = [];
    nextSequence();
  } else {
  }
});

var buttons = $(".btn");

for (var index = 0; index < buttons.length; index++) {
  var oneButton = buttons[index];
  oneButton.addEventListener("click", function (e) {
    if (
      $("h1").text() === "Press A Key to Start" ||
      $("h1").text() === "Game Over, Press Any Key to Restart"
    ) {
      return;
    }
    var buttonId = this.id;
    switch (buttonId) {
      case "blue":
        var sound = new Audio("./sounds/blue.mp3");
        sound.play();
        buttonAnimation(buttonId);
        userClickedPattern.push(buttonId);
        break;

      case "green":
        sound = new Audio("./sounds/green.mp3");
        sound.play();
        buttonAnimation(buttonId);
        userClickedPattern.push(buttonId);
        break;

      case "red":
        sound = new Audio("./sounds/red.mp3");
        sound.play();
        buttonAnimation(buttonId);
        userClickedPattern.push(buttonId);
        break;

      case "yellow":
        sound = new Audio("./sounds/yellow.mp3");
        sound.play();
        buttonAnimation(buttonId);
        userClickedPattern.push(buttonId);
        break;

      default:
        console.log("error");
        break;
    }

    function checkCompliance() {
      var isTheSame;
      for (let index = 0; index < userClickedPattern.length; index++) {
        if (userClickedPattern[index] === gamePattern[index]) {
          isTheSame = true;
        } else {
          isTheSame = false;
        }

        if (isTheSame === false) {
          $("h1").text("Game Over, Press Any Key to Restart");
          var wrong = new Audio("./sounds/wrong.mp3");
          wrong.play();
        } else {
          if (gamePattern.length === userClickedPattern.length) {
            nextSequence();
          }
        }
      }
    }
    checkCompliance();
  });
}

function buttonAnimation(e) {
  $("#" + e).addClass("pressed");
  setTimeout(() => {
    $("#" + e).removeClass("pressed");
  }, 100);
}
