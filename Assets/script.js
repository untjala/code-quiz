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
var quizQuestions = [
    {
        title: "Sites and applications made with JavaScript cannot run on mobile devices:",
        option: ["true", "false"],
        answer: "true"
    },
    {
        title: "i, when used in JavaScript, represents:",
        option: ["index", "important"],
        answer: "index"
    },
    {
        title: "A for loop MUST contain an if statemnt:",
        option: ["true", "false"],
        answer: "false"
    },
    {
        title: "A variable declared without a value will return:",
        option: ["undefined", "unknown",],
        answer: "undefined"
    },
    {
        title: "On it's own, (this) will refer to: ",
        option: ["a specfic object", "the global object"],
        answer: "the global object"
    },
];
var position = 0;
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
    var currentQuestion = quizQuestions[position]; 
    var questionTitle = document.querySelector("#questions")
    questionTitle.textContent = currentQuestion.title
    currentQuestion.option.forEach(function(i)
     {
        var questionOptions = document.createElement("button")
        questionOptions.textContent = i
        questionOptions.onclick = 
        options.append(questionOptions)
        console.log(currentQuestion.option, questionOptions, questionTitle)
    })
}

//Begin button to start timer and quiz
beginBtnEl.addEventListener("click", function (event) {
    startTimer();
    welcomeEl.style.display = "none";
    landingEl.style.display = "none";
    quizHeaderEl.style.display = "block";
    
});

function init() {
    quizHeaderEl.style.display = "none";
    submitBtnEl.style.display = "none";
    scoreEl.style.display = "none";
}

// THEN I am presented with another question
// questionEl.addEventListener("click", function (event) {
//     var element = event.target;
//     if (element.matches(quizQuestionsEl)) {
//         position++;
//         if (position < quizQuestions.length) {
//             displayQuestions();
//         } else {
//             displayEnd();
//         }
//     }
// });


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 
// THEN the game is over 
function displayEnd() {
    scoreEl.style.display = "none";
    submitBtnEl.style.display = "none";
};
submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    displayEnd();
});

// THEN I can save my initials and score 
init();