// Array of RGB color values
var colors = generateRandomColors(3);

// Select a random color from the array
var pickedColor = pickColor();

// Select elements
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var scoreDisplay = document.getElementById("scoreValue");
var livesDisplay = document.getElementById("livesValue");
var resetButton = document.getElementById("resetButton");

// Initial score and lives values
var score = 0;
var lives = 3;

// Display the RGB color to guess
colorDisplay.textContent = pickedColor;


// Create color options
for (var i = 0; i < colors.length; i++) {
    var colorOption = document.createElement("div");
    colorOption.classList.add("colorOption");
    colorOption.style.backgroundColor = colors[i];
    colorOption.addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            score++;
            scoreDisplay.textContent = score;
            resetGame();
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "#f9f9f9";
            lives--;
            livesDisplay.textContent = lives;
            if (lives === 0) {
                messageDisplay.textContent = "Game Over";
                resetButton.textContent = "Play Again";
                resetButton.style.display = "block";
            }
        }
    });
    document.getElementById("colorOptions").appendChild(colorOption);
}


// Reset the game
function resetGame() {
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < colors.length; i++) {
        document.querySelectorAll(".colorOption")[i].style.backgroundColor = colors[i];
    }
}

// Generate random RGB color values
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        arr.push("rgb(" + red + ", " + green + ", " + blue + ")");
    }
    return arr;
}

// Pick a random color from the array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Reset the game when the "Play Again" button is clicked
resetButton.addEventListener("click", function() {
    score = 0;
    lives = 3;
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;
    resetButton.style.display = "none";
    resetGame();
});
