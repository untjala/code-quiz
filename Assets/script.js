// Project Variables 
var welcomeEl = document.querySelector("#welcome")
var landingEl = document.querySelector("#landing-page");
var scoreEl = document.querySelector("#score-page");
var submitBtnEl = document.querySelector("#score-page button")
var beginBtnEl = document.querySelector("#landing-page button");
var quizHeaderEl = document.querySelector("#question-header")
var timerEl = document.querySelector("#countdown");
var quizQuestionsEl = document.querySelector("#questions");
var options = document.querySelector("#options");
var quizEl = document.querySelector("#quiz");
var timeLeft = 60;
var currentIndex = 0;

var quizQuestions = [
    {
        title: "Sites made with JavaScript cannot run on mobile devices:",
        option: ["true", "false",],
        correct: 1
    },
    {
        title: "i, when used in JavaScript, represents:",
        option: ["index", "important",],
        correct: 1
    },
    {
        title: "A for loop MUST contain an if statement:",
        option: ["true", "false",],
        correct: 2
    },
    {
        title: "A variable declared without a value will return:",
        option: ["undefined", "unknown",],
        correct: 1
    },
    {
        title: "On it's own, (this) will refer to: ",
        option: ["a specfic object", "the global object",],
        correct: 2
    },
];


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
    displayQuestions();
}
// WHEN I answer a question
function displayQuestions() {
    var listOfAnswers = quizQuestions[currentIndex].option;
    var currentQuestion = quizQuestions[currentIndex];
    var questionTitle = document.querySelector("#questions")
    questionTitle.textContent = currentQuestion.title
    
    for (var i = 0; i < listOfAnswers.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = listOfAnswers[i];
        quizQuestionsEl.appendChild(buttonEl);
        quizQuestionsEl.onclick = function () {
            quizQuestionsEl.innerHTML = "";
            answerCheck();
        }
    }
}

function answerCheck() {
    currentIndex++;
    quizQuestionsEl.innerHTML = "";
    displayQuestions();
    var userAnswer = quizQuestions[currentIndex].option;
    if (userAnswer.matches(".quizQuestions[currentIndex].correct")) {
        alert("Good work")
    } else {
        alert("BOOOOOO")
    }
    displayQuestions();
}
function displayEnd() {
    if (currentIndex < quizQuestions.length) {
        welcomeEl.style.display = "none";
        landingEl.style.display = "none";
        quizHeaderEl.style.display = "none";
    };
}


function init() {
    quizHeaderEl.style.display = "none";
    submitBtnEl.style.display = "none";
    scoreEl.style.display = "none";
}
//Begin button to start timer and quiz
beginBtnEl.addEventListener("click", function (event) {
    startTimer();
    welcomeEl.style.display = "none";
    landingEl.style.display = "none";
    quizHeaderEl.style.display = "block";

});
submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    displayEnd();
});

// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 
// THEN the game is over 


// THEN I can save my initials and score 
init();