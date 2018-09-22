var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //MODE BUTTON event listeners
  setupModeButtons();
  setupSquares();

  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      // if(this.textContent === "Easy"){
      //     numSquares = 3;
      // } else {
      //     numSquares = 6;
      // }                         SAME AS ABOVE CODE

      reset();

      //figure out how many sq to shoe
      //pick colors
      //pick a new PickedColor
      //update page to reflect changes
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add click listeners to sq
    squares[i].addEventListener("click", function() {
      //grab color of picked square
      var clickedColor = this.style.background;
      //Compare colors to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  //pick new random color from arr
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";

  message.textContent = "";
  //chane colors of sq
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
// hardBtn.addEventListener("click", function() {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].style.background = colors[i];
//     squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function() {
  reset();

  //   //generate all new colors
  //   colors = generateRandomColors(numSquares);
  //   //pick new random color from arr
  //   pickedColor = pickColor();
  //   //change colorDisplay to match picked color
  //   colorDisplay.textContent = pickedColor;
  //   this.textContent = "New Colors";

  //   message.textContent = "";
  //   //chane colors of sq
  //   for (let i = 0; i < squares.length; i++) {
  //     squares[i].style.background = colors[i];
  //   }
  //   h1.style.background = "steelblue";
});

function changeColors(color) {
  //loop through all sq
  for (let i = 0; i < squares.length; i++) {
    //change each color to match correct color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make and array
  var arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    //get random colors and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
