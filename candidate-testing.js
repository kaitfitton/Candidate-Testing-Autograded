const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";



//TODO: Variables for Part 2
let questions = [("Who was the first American woman in space? "), ("True or false: 5 kilometer == 5000 meters? "),
("(5 + 3)/2 * 10 = ? "), ("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? "),
("What is the minimum crew size for the ISS? ")];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  "// TODO 1.1b: Ask for candidate's name //"
let candidateName = input.question("Enter your name: ");
console.log(candidateName);
}

askForName();

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswer = input.question(question);
console.log(candidateAnswer);
}
askQuestion();

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
function singleQuestionQuiz(candidateAnswer) {
  if (candidateAnswer === correctAnswer){
    console.log("Congrats, the question is correct");
  }
  else{ 
    console.log("This answer is not correct");  
  } 
}

singleQuestionQuiz(candidateAnswer);

//create a loop that asks the candidate all the questions in the array and stores the answers in the candidateAnswers array
function askMultipleQuestions(){  
  for (let i = 0; i < questions.length; i++){
    candidateAnswers.push(input.question(questions[i]));
    console.log(candidateAnswers[i]);
  }
}
askMultipleQuestions();

//create a template literal that displays the candidates answers and the correct answers
console.log(`The candidate responded ${candidateAnswers}. The correct answers are ${correctAnswers}`);

//compare the candidate answers to the correct answers and calculate the grade as a percentage
function gradeQuiz(candidateAnswers){
  let candidateAnswers2 = []
  let correctAnswers2 = []

  for (let i = 0; i < candidateAnswers.length; i++){
      candidateAnswers2.push(candidateAnswers[i].toLowerCase())
  }

  for (let i =0; i < correctAnswers.length; i++){
      correctAnswers2.push(correctAnswers[i])
  }

  let numCorrect = 0
  for (let i = 0; i < candidateAnswers.length; i++){
      if (candidateAnswers2[i] === correctAnswers2[i].toLowerCase()){
          numCorrect++;
      }
  }
  
  let grade = (numCorrect/questions.length) * 100

  if (grade > 80){
      console.log("Congrats you passed the quiz with 80% or higher!");}
  else{
      console.log("You did not pass the quiz")
  }
  return grade;
}

console.log(gradeQuiz(candidateAnswers));


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};