var state = "landingEl";
// Project Variables 
var landingEl = document.querySelector("#landing-page");
var quizEl = document.querySelector("#quiz");
var scoreEl = document.querySelector("#score-page");
var beginBtnEl = document.querySelector("#landing-page button");
var quizQuestionEl = document.querySelector("#question-page #question-header");
var timerEl = document.querySelector("#countdown");
var timeLeft = 60;
var questions = document.querySelector("#questions");

//Timer Duration Message
function displayMessage () {
    timerEl.textContent = timeLeft + " seconds remaining"
}
//Funtion to run timer
function startTimer() {
    displayMessage ();
    var timerInterval = setInterval(function () {
        timeLeft--;
        displayMessage ();
//Clears timer and sends end message
        if (timeLeft === 0) {
          timerEl.textContent = "Times up!";
            clearInterval(timerInterval)
        }

    }, 1000);
}
//Begin button to start timer and quiz
beginBtnEl.addEventListener("click", function (event) {
    startTimer();
});




// WHEN I answer a question

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score 