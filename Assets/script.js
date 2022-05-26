// var state = "quizEl";
//landingEl.style.display = none
// Project Variables 
var welcomeEl =document.querySelector ("#welcome")
var landingEl = document.querySelector("#landing-page");
var quizEl = document.querySelector("#quiz");
var scoreEl = document.querySelector("#score-page");
var beginBtnEl = document.querySelector("#landing-page button");
var submitBtnEl = document.querySelector("#score-page button")
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
    if (startTimer) {
        welcomeEl.style.display = "none";
        landingEl.style.display = "none";
        scoreEl.style.display = "none";
    } else {
        quizEl.style.display = "none";
    }
});

//Quiz Question Array
var quizQuestions = [
    {
        questionOne,
        question: "Sites and applications made with JavaScript cannot run on mobile devices:",
        option: ["true", "false"],
        answer: "true"
    },
    {
        questionTwo,
        question: "i, when used in JavaScript, represents:",
        option: ["indent", "index", "important"],
        answer: "index"
    },
    {
        questionThree,
        question: "A for loop MUST contain an if statemnt:",
        option: ["true", "false"],
        answer: "false"
    },
    {
        questionFour,
        question: "A variable declared without a value will return:",
        option: ["undefined", "unknown", "null"],
        answer: "undefined"
    },
    {
        questionFive,
        question: "On it's own, (this) will refer to: ",
        option: ["an undefined variable", "a specfic object", "the global object"],
        answer: "the global object"
    },
];
// WHEN I answer a question
// quizQuestions.addEventListener("click", function (event) {
//     if (increase === 5) {
//         response.textContent = "You Got It"
//         points.textContent = timeLeft
//     } else if {
//         event.target.textContent !===[increase -1].correct
//     }
// })
function renderQuestions (currentQuestion) {
    questions.textContent = quizQuestions[0].question;
}

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 

// THEN the game is over


// WHEN the game is over
// submitBtnEl.addEventListener("click", function (event) {
//     event.preventDefault ();
//         landingEl.style.display = "none";
//     }
// });
// THEN I can save my initials and score 