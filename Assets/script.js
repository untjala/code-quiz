// Global Variables 
var welcomeEl = document.querySelector("#welcome")
var landingEl = document.querySelector("#landing-page");
var scoreEl = document.querySelector("#score-page");
var submitBtnEl = document.querySelector("#score-page button")
var beginBtnEl = document.querySelector("#landing-page button");
var quizHeaderEl = document.querySelector("#question-header")
var timerEl = document.querySelector("#countdown");
var quizQuestionsEl = document.querySelector("#questions");
var optionsEl = document.querySelector("#options");
var quizEl = document.querySelector("#quiz");
var timeLeft = 60;
var currentIndex = 0;

//Array of quiz questions
var quizQuestions = [
    {
        title: "Sites made with JavaScript cannot run on mobile devices:",
        optionA: "true",
        optionB: "false",
        correct: "true"
    },
    {
        title: "i, when used in JavaScript, represents:",
        optionA: "index",
        optionB: "important",
        correct: "index"
    },
    {
        title: "A function must include:",
        optionA: "parentheses",
        optionB: "square brackets",
        correct: "paraentheses"
    },
    {
        title: "A variable declared without a value will return:",
        optionA: "undefined",
        optionB: "unknown",
        correct: "undefined"
    },
    {
        title: "On it's own, (this) will refer to: ",
        optionA: "a specfic object",
        optionB: "the global object",
        correct: "the global object"
    },
];

function displayQuestions() {
    quizQuestionsEl.innerHTML = "";
    optionsEl.innerHTML = "";
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var questionDisplay = document.createElement("p");

    questionDisplay.textContent = quizQuestions[currentIndex].title
    buttonA.textContent = quizQuestions[currentIndex].optionA
    buttonB.textContent = quizQuestions[currentIndex].optionB

    quizQuestionsEl.appendChild(questionDisplay);
    optionsEl.appendChild(buttonA);
    optionsEl.appendChild(buttonB);
    quizQuestionsEl.appendChild(optionsEl)
}

optionsEl.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        if (event.target.textContent !== quizQuestions[currentIndex].correct) {
            timeLeft = timeLeft - 10;
        }
        
        currentIndex++;

        if (currentIndex < quizQuestions.length) {
            displayQuestions();
        }
    }
});

//Hides pages upon launch
function init() {
    quizHeaderEl.style.display = "none";
    submitBtnEl.style.display = "none";
    scoreEl.style.display = "none";
}


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
        if (timeLeft <= 0) {
            timerEl.textContent = "Time's up!";
            clearInterval(timerInterval)
        }

    }, 1000);
    displayQuestions();
}
// WHEN I answer a question
// function displayQuestions() {
//     var listOfAnswers = quizQuestions[currentIndex].option;
//     var currentQuestion = quizQuestions[currentIndex];
//     var questionTitle = document.querySelector("#questions")
//     questionTitle.textContent = currentQuestion.title
//     //TUTOR ASSISTANCE
//     for (var i = 0; i < listOfAnswers.length; i++) {
//         var optionButtonEl = document.createElement("button");
//        optionButtonEl.textContent = listOfAnswers[i];
//         quizQuestionsEl.appendChild(optionButtonEl);
//         quizQuestionsEl.onclick = function () {
//             //END OF TUTOR ASSISTANCE
//             quizQuestionsEl.innerHTML = "";
//             answerCheck();
//         }
//     }
// }
//Function to check user's answer agaisnt correct answer
function answerCheck() {
    currentIndex++;
    quizQuestionsEl.innerHTML = "";
    displayQuestions();
    if (userAnswer == (".quizQuestions[currentIndex].correct")) {
        //alerts for testing if statement -- remove later
        answerCheck.textContent = "Correct!"
    } else {
        answerCheck.textContent = "Incorrect!"
        timeLeft -= 10;
    }
    var userAnswer = quizQuestions[currentIndex].option;
    displayQuestions();
}
//Sends timer end message, will clear states in future
function displayEnd() {
    if (timeLeft = secondsRemaining) {
        var endMessage = document.createElement("p")
        clearInterval(timerInterval);
        endMessage.textContent = "Your score is: " + secondsRemaining;
        quizQuestionsEl.appendChild(endMessage)
        // welcomeEl.style.display = "none";
        // landingEl.style.display = "none";
        // quizHeaderEl.style.display = "none";
    };
}

//Begin button to start timer and quiz
beginBtnEl.addEventListener("click", function (event) {
    startTimer();
    welcomeEl.style.display = "none";
    landingEl.style.display = "none";
    quizHeaderEl.style.display = "block";

    //Submit button -- needs more content + an end timer function
});
submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    displayEnd();
});
init();