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
        title: "Sites and applications made with JavaScript cannot run on mobile devices:",
        option: ["true", "false"],
        correct: "true"
    },
    {
        title: "i, when used in JavaScript, represents:",
        option: ["index", "important"],
        correct: "index"
    },
    {
        title: "A for loop MUST contain an if statemnt:",
        option: ["true", "false"],
        correct: "false"
    },
    {
        title: "A variable declared without a value will return:",
        option: ["undefined", "unknown",],
        correct: "undefined"
    },
    {
        title: "On it's own, (this) will refer to: ",
        option: ["a specfic object", "the global object"],
        correct: "the global object"
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
    var currentQuestion = quizQuestions[currentIndex]; 
    var questionTitle = document.querySelector("#questions")
    questionTitle.textContent = currentQuestion.title
    currentQuestion.option.forEach(function(i)
     {
        var questionOptions = document.createElement("button")
        questionOptions.textContent = i
        questionOptions.onclick = function(){
            answerCheck();
        }
        options.append(questionOptions)
        })
    function answerCheck (){
        currentIndex++;
        displayQuestions();
        var userAnswer = quizQuestions.onclick
        if (userAnswer === quizQuestions.correct); {
            alert("Good Work!")
        }
    }   
    }
function displayEnd() {
    if (timeLeft === 0) { 
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