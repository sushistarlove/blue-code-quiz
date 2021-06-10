//Selecting All Elements
var start = document.getElementById("start");       
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

//Make Questions
var questions = [
    {
        question : "What Does CSS Stand For?",
        ChoiceA : "Wrong",
        ChoiceB : "Wrong",
        ChoiceC : "Wrong",
        choiceD : "Correct",
        correct : "D",
    },{
        question : "Which Heading Tag Will Make The Text Appear The Largest?",
        ChoiceA : "Wrong",
        ChoiceB : "Correct",
        ChoiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B",
        },{
            question : "What JavaScript Element Represents Either True or False Values?",
            ChoiceA : "Wrong",
            ChoiceB : "Wrong",
            ChoiceC : "Wrong",
            choiceD : "Correct",
            correct : "D",
            },{
                question : "Question 4?",
                ChoiceA : "Correct",
                ChoiceB : "Wrong",
                ChoiceC : "Wrong",
                choiceD : "Wrong",
                correct : "A",
                },{
                    question : "Question 5?",
                    ChoiceA : "Wrong",
                    ChoiceB : "Wrong",
                    ChoiceC : "Correct",
                    choiceD : "Wrong",
                    correct : "C",
                    },{
                        question : "Question 6?",
                        ChoiceA : "Wrong",
                        ChoiceB : "Wrong",
                        ChoiceC : "Wrong",
                        choiceD : "Correct",
                        correct : "D",
                    },{
                        question : "Question 7?",
                        ChoiceA : "Wrong",
                        ChoiceB : "Correct",
                        ChoiceC : "Wrong",
                        choiceD : "Wrong",
                        correct : "B",
                    },{
                        question : "Question 8?",
                        ChoiceA : "Correct",
                        ChoiceB : "Wrong",
                        ChoiceC : "Wrong",
                        choiceD : "Wrong",
                        correct : "A",
                      },{
                        question : "Question 9?",
                        ChoiceA : "Wrong",
                        ChoiceB : "Wrong",
                        ChoiceC : "Wrong",
                        choiceD : "Correct",
                        correct : "D",
                      },{
                        question : "Question 10?",
                        ChoiceA : "Wrong",
                        ChoiceB : "Wrong",
                        ChoiceC : "Correct",
                        choiceD : "Wrong",
                        correct : "C",
                      }
];

//make Variables
var lastQuestion = questions.length - 1;
var runningQuestion = 0;

//Render Question
function renderQuestion(){
    var q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}


