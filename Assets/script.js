var state = "landingEl";
// Project Variables 
var landingEl = document.querySelector("#landing-page");
var quizEl = document.querySelector("#quiz");
var scoreEl = document.querySelector("#score-page");
var beginBtnEl = document.querySelector("#landing-page button");
var quizQuestionEl = document.querySelector("#question-page");
var quizHeaderEl = document.querySelector("#question-header")
var timerEl = document.querySelector("#countdown");
var timeLeft = 60;
var questions = document.querySelector("#questions");

//Timer Duration Message
function displayMessage() {
    timerEl.textContent = timeLeft + " seconds remaining"
}
//Funtion to run timer
function startTimer() {
    displayMessage();
    var timerInterval = setInterval(function () {
        timeLeft--;
        displayMessage();
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


var quizQuestions = [
    { 
     question: "Sites and applications made with JavaScript cannot run on mobile devices:",
     option: ["true", "false"],
     answer: "true"
    },
    {
        question: "i, when used in JavaScript, represents:",
        option: ["indent", "index", "important"],
        answer: "index"
    },
    {
        question: "A for loop MUST contain an if statemnt:",
        option: ["true", "false"],
        answer: "false"
    },
    {
        question: "A variable declared without a value will return:",
        option: ["undefined", "unknown", "null"],
        answer: "undefined"
    },
    {
        question: "On it's own, (this) will refer to: ",
        option: ["an undefined variable", "a specfic object", "the global object"],
        answer: "the global object"
    },
];
// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score 