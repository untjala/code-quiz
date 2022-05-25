// GIVEN I am taking a code quiz
var landingPageEl = document.querySelector("#landing-page")
var quizEl = document.querySelector("#quiz")
var endPageEl = document.querySelector("#end-page")
var beginBtnEl = document.querySelector("#landing-page button")
var quizQuestionEl = document.querySelector("#question-page #questions")
var timerEl = document.querySelector("#countdown");
var timeLeft = 60;
// WHEN I click the start button
beginBtnEl.addEventListener("click", function (event) {
timerEl.textContent = timeLeft + " seconds remaining"    
    var timeInterval = setInterval(function () {
        timeLeft--;
        displayTime();
        
        if (timeLeft > 0) {
            displayCountdown(timeLeft);
        } else {
            timerEl.textContent = "Times up!";
            clearInterval(timeInterval)
        }
    }, 1000);
    // startTimer ();    
});

// THEN a timer starts and I am presented with a question
// function startTimer() { 

// }

// WHEN I answer a question

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score 