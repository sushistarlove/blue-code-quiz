//Selecting All Elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correct = document.getElementById("correct")
var incorrect = document.getElementById("incorrect")
var quizTimer = document.getElementById("timer")

//Make Questions
var questions = [
  {
    question: "1. What Does CSS Stand For?",
    choiceA: "Corporate Styling Standard",
    choiceB: "Colorful Sizing Sheets",
    choiceC: "Collided Style Sheets",
    choiceD: "Cascading Style Sheets",
    correct: "D",
  },
  {
    question: "2. Which Heading Tag Will Make The Text Appear The Largest?",
    choiceA: "The h5 tag",
    choiceB: "The h1 tag",
    choiceC: "The h2 tag",
    choiceD: "The h3 tag",
    correct: "B",
  },
  {
    question: "3. What JavaScript Element Represents Either True or False Values?",
    choiceA: "Object",
    choiceB: "Number",
    choiceC: "String",
    choiceD: "Boolean",
    correct: "D",
  },
  {
    question: "4. What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Dead Ostriches March",
    choiceC: "Dark Oaks Melt",
    choiceD: "Dreadful Object Model",
    correct: "A",
  },
  {
    question: "5. Which one of these is an element?",
    choiceA: "Boolean",
    choiceB: "<buttn <h1>>",
    choiceC: "<button>Hello World!</button>",
    choiceD: "Fir Tree",
    correct: "C",
  },
  {
    question: "6. What year was JavaScript introduced?",
    choiceA: "1643",
    choiceB: "1986",
    choiceC: "1975",
    choiceD: "1995",
    correct: "D",
  },
  {
    question: "7. What is React.js?",
    choiceA: "An extension",
    choiceB: "A JavaScript framework",
    choiceC: "A plug-in",
    choiceD: "A language",
    correct: "B",
  },
  {
    question: "What is Vue.js?",
    choiceA: "A social media platform",
    choiceB: "A JavaScript framework",
    choiceC: "A plug-in",
    choiceD: "An extension",
    correct: "B",
  },
  {
    question: "What does HTML stand for?",
    choiceA: "Hypnosis Trippy Mango Langauge",
    choiceB: "Hexagonal Texting Money Langauge",
    choiceC: "HyperTyping Magic Language",
    choiceD: "HyperText Markup Language",
    correct: "D",
  },
  {
    question: "What is MySQL?",
    choiceA: "Japanese",
    choiceB: "A front-end langauge",
    choiceC: "A databasing langauge",
    choiceD: "A Visual Studio Code extension",
    correct: "C",
  },
];

//make Variables
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var score = 0;
var timer = 80;
var interval = 0;

//Render Question
function renderQuestion() {
  var q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}


start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  interval = setInterval(function() {
    if (timer <= 0) {
      endQuiz();
    }
    quizTimer.children[0].textContent = timer; timer--
  }, 1000);



  console.log(quizTimer.children[0])

}

function checkAnswer(answer) {
  console.log(timer)
  if (!questions[runningQuestion]) {
    endQuiz()
  }
  if (answer == questions[runningQuestion].correct) {
    score++; correct.style.display = "block"; incorrect.style.display = "none";
  } else { 
    correct.style.display = "none"; incorrect.style.display = "block"; timer = timer-5;
  }
  runningQuestion++; renderQuestion()
}

// setInterval(5000) check time each time and update it when it reaches a certain second //Clear

function endQuiz() {
const message = window.prompt("Please Enter Your Initials")
clearInterval(interval)
const highscores = localStorage.getItem("highscores") || []

const newScore = {
  message, score
}

highscores.push(newScore)

localStorage.setItem("highscore", JSON.stringify(highscores))

window.location.replace('index2.html');
}


