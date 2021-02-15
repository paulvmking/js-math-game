document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});


function runGame() {

}

// Called when the user clicks the Submit button or presses Enter

function checkAnswer() {

}

function calculateRightAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// Displays the questions.

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}