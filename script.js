const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Type Markup Language", "Hyper Text Makeup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"
    },
    {
        question: "Which is not a JavaScript Framework?",
        options: ["Python Script", "React", "Angular", "Vue"],
        answer: "Python Script"
    }
];

let currentQ = 0;
let score = 0;
let timer;
let timeLeft = 15;

function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("quiz-box").classList.remove("hide");
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById("timer").innerText = timeLeft;
    timer = setInterval(countdown, 1000);

    let q = questions[currentQ];
    document.getElementById("question").innerText = q.question;
    let optionsHtml = "";
    q.options.forEach(option => {
        optionsHtml += `<li onclick="checkAnswer(this)">${option}</li>`;
    });
    document.getElementById("options").innerHTML = optionsHtml;
}

function countdown() {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    if (timeLeft === 0) {
        nextQuestion();
    }
}

function checkAnswer(option) {
    clearInterval(timer);
    let selected = option.innerText;
    if (selected === questions[currentQ].answer) {
        score += 10;
        document.getElementById("score").innerText = score;
        option.style.background = "#00ff00";
    } else {
        option.style.background = "#ff4d4d";
    }
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-box").classList.add("hide");
    document.getElementById("result-screen").classList.remove("hide");
    document.getElementById("final-score").innerText = score;
}

function restartQuiz() {
    currentQ = 0;
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("result-screen").classList.add("hide");
    startQuiz();
}
