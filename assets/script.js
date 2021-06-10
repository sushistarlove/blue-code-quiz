//Selecting All Elements
const start = document.getElementID("start");
const quiz = document.getElementID("quiz");
const question = document.getElementID("question");
const choiceA = document.getElementID("A");
const choiceB = document.getElementID("B");
const choiceC = document.getElementID("C");
const choiceD = document.getElementID("D");
const progress = document.getElementID("progress");

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
            question : "Question 3?",
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
                        question : "What Does CSS Stand For?",
                        ChoiceA : "Wrong",
                        ChoiceB : "Wrong",
                        ChoiceC : "Correct",
                        choiceD : "Wrong",
                        correct : "C",
                      }
];