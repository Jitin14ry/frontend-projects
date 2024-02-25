var colors = [];
var numColors = 6;
var correctColorIndex;
var score = 0;
var highScore = 0;

var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var colorButtons = document.getElementById("color-buttons");
var resetButton = document.getElementById("reset-btn");
var scoreDisplay = document.getElementById("score");
var highScoreDisplay = document.getElementById("high-score");

initializeGame();

function initializeGame() {
    generateRandomColors();
    pickCorrectColor();
    updateDisplay();
    resetButton.hidden = true; // Hide the reset button at the start
}

function generateRandomColors() {
    colors = [];
    var baseColor = generateBaseColor();
    var variationFactor = 100 - score

    for (var i = 0; i < numColors; i++) {
        var r = Math.min(255, Math.max(0, Math.floor(baseColor.r + (Math.random() - 0.5) * 2 * variationFactor)));
        var g = Math.min(255, Math.max(0, Math.floor(baseColor.g + (Math.random() - 0.5) * 2 * variationFactor)));
        var b = Math.min(255, Math.max(0, Math.floor(baseColor.b + (Math.random() - 0.5) * 2 * variationFactor)));
        colors.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
}

function generateBaseColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

function pickCorrectColor() {
    correctColorIndex = Math.floor(Math.random() * numColors);
}

function updateDisplay() {
    colorDisplay.style.backgroundColor = colors[correctColorIndex];
    messageDisplay.textContent = "";
    colorButtons.innerHTML = "";
    
    for (var i = 0; i < numColors; i++) {
        var button = document.createElement("button");
        button.classList.add("color-btn");
        button.style.backgroundColor = colors[i];
        button.addEventListener("click", function() {
            checkAnswer(this.style.backgroundColor);
        });
        colorButtons.appendChild(button);
    }
}

function checkAnswer(clickedColor) {
    if (clickedColor === colors[correctColorIndex]) {
        score++;
        scoreDisplay.textContent = score;
        changeBackgroundColor(clickedColor);
        setTimeout(function() {
            changeBackgroundColor("");
            pickCorrectColor();
            generateRandomColors(); // Regenerate colors when the user answers correctly
            updateDisplay();
        }, 500);
    } else {
        messageDisplay.textContent = "Game Over!";
        resetButton.hidden = false;
        resetButton.textContent = 'Try again';
        if (score > highScore) {
            highScore = score;
            highScoreDisplay.textContent = highScore;
        }
        score = 0;
        scoreDisplay.textContent = score;
    }
}

function resetGame() {
    initializeGame();
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}