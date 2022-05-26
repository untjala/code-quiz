var quizQuestionsEl = document.querySelector("#questions");
var quizEl = document.querySelector("#quiz");
//Quiz Question Array
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
var position = 0;
// WHEN I answer a question
function displayQuestions() {
    var questionsEl = quizQuestionsEl
    questionsEl.innerHtml = "";
    questionsEl.appendChild(quizQuestions)
}
// WHEN the game is over
// THEN I can save my initials and score 
function displayEnd() {
    submitBtnEl.addEventListener("click", function (event) {
        event.preventDefault();
    });
}

function init() {
    displayQuestions();
}
// THEN I am presented with another question
questionEl.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(quizQuestionsEl)) {
        position++;
        if (position < quizQuestions.length) {
            displayQuestions();
        } else {
            displayEnd();
        }
    }
});

init();
// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 