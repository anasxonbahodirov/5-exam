const startBtn = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const playAgainBtn = document.getElementById("play-again-btn");

let correctAnswers = 0;

const questions = [
  { question: "10 + 5 = ?", answer: 15 },
  { question: "9 * 2 = ?", answer: 18 },
  { question: "20 / 4 = ?", answer: 5 },
  { question: "10 - 3 = ?", answer: 7 },
];

let currentQuestionIndex = 0;

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkAnswer);
playAgainBtn.addEventListener("click", restartGame);

function startGame() {
  startBtn.classList.add("hide");
  showQuestion();
}

function showQuestion() {
  questionContainer.classList.remove("hide");
  questionText.innerText = questions[currentQuestionIndex].question;
}

function checkAnswer() {
  const userAnswer = parseInt(answerInput.value);
  if (userAnswer === questions[currentQuestionIndex].answer) {
    correctAnswers++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
  answerInput.value = "";
}

function showResult() {
  questionContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  resultText.innerText = `Siz ${questions.length} savoldan ${correctAnswers} ta to'g'ri javob berdingiz.`;
}

function restartGame() {
  correctAnswers = 0;
  currentQuestionIndex = 0;
  resultContainer.classList.add("hide");
  startBtn.classList.remove("hide");
}
