
/* ==========================================
   MINDLIFT - FRONTEND JAVASCRIPT
   HTML + CSS + JavaScript Only
========================================== */


/* ==========================================
   QUESTION DATA
========================================== */

const questionData = {

    Aptitude: [
        {
            question: "What is 20% of 150?",
            options: ["20", "25", "30", "35"],
            answer: "30"
        },
        {
            question: "If 5 pens cost ₹50, what is the cost of 1 pen?",
            options: ["₹5", "₹10", "₹15", "₹20"],
            answer: "₹10"
        },
        {
            question: "What is 15 + 25 × 2?",
            options: ["80", "65", "55", "50"],
            answer: "65"
        },
        {
            question: "A train travels 60 km in 1 hour. How far will it travel in 3 hours?",
            options: ["120 km", "150 km", "180 km", "200 km"],
            answer: "180 km"
        },
        {
            question: "What is the average of 10, 20 and 30?",
            options: ["15", "20", "25", "30"],
            answer: "20"
        }
    ],


    Reasoning: [
        {
            question: "Find the next number: 2, 4, 6, 8, ?",
            options: ["9", "10", "11", "12"],
            answer: "10"
        },
        {
            question: "Find the odd one out.",
            options: ["Apple", "Mango", "Carrot", "Banana"],
            answer: "Carrot"
        },
        {
            question: "If CAT is coded as DBU, how is DOG coded?",
            options: ["EPH", "EOG", "DPH", "FPH"],
            answer: "EPH"
        },
        {
            question: "Find the next number: 5, 10, 20, 40, ?",
            options: ["50", "60", "70", "80"],
            answer: "80"
        },
        {
            question: "Which number does not belong to the group?",
            options: ["3", "6", "9", "11"],
            answer: "11"
        }
    ],


    Verbal: [
        {
            question: "Choose the correct synonym of 'Happy'.",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            answer: "Joyful"
        },
        {
            question: "Choose the correct spelling.",
            options: ["Recieve", "Receive", "Receeve", "Receve"],
            answer: "Receive"
        },
        {
            question: "Choose the antonym of 'Strong'.",
            options: ["Powerful", "Weak", "Brave", "Hard"],
            answer: "Weak"
        },
        {
            question: "Fill in the blank: She ___ to college every day.",
            options: ["go", "goes", "going", "gone"],
            answer: "goes"
        },
        {
            question: "Which word is a noun?",
            options: ["Quickly", "Beautiful", "Teacher", "Run"],
            answer: "Teacher"
        }
    ],


    Python: [
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "fun", "define"],
            answer: "def"
        },
        {
            question: "Which symbol is used for comments in Python?",
            options: ["//", "#", "/*", "--"],
            answer: "#"
        },
        {
            question: "Which data type stores True or False?",
            options: ["int", "str", "bool", "float"],
            answer: "bool"
        },
        {
            question: "Which function is used to display output in Python?",
            options: ["display()", "show()", "print()", "output()"],
            answer: "print()"
        },
        {
            question: "Which brackets are used to create a list?",
            options: ["()", "{}", "[]", "<>"],
            answer: "[]"
        }
    ],


    Java: [
        {
            question: "Which keyword is used to create a class in Java?",
            options: ["class", "struct", "object", "define"],
            answer: "class"
        },
        {
            question: "Which method is the starting point of a Java program?",
            options: ["start()", "main()", "run()", "execute()"],
            answer: "main()"
        },
        {
            question: "Which data type is used for whole numbers?",
            options: ["float", "double", "int", "char"],
            answer: "int"
        },
        {
            question: "Which keyword is used to inherit a class?",
            options: ["implements", "extends", "inherits", "using"],
            answer: "extends"
        },
        {
            question: "Java is primarily a ______ language.",
            options: ["Object-oriented", "Markup", "Query", "Styling"],
            answer: "Object-oriented"
        }
    ],


    JavaScript: [
        {
            question: "Which keyword declares a variable that cannot be reassigned?",
            options: ["var", "let", "const", "fixed"],
            answer: "const"
        },
        {
            question: "Which method prints output to the browser console?",
            options: ["console.log()", "print()", "display()", "write()"],
            answer: "console.log()"
        },
        {
            question: "Which symbol is used for strict equality?",
            options: ["=", "==", "===", "!="],
            answer: "==="
        },
        {
            question: "Which keyword is used to define a function?",
            options: ["function", "def", "fun", "method"],
            answer: "function"
        },
        {
            question: "Which language is JavaScript primarily used for?",
            options: ["Web development", "Database management", "Operating systems", "Networking only"],
            answer: "Web development"
        }
    ],


    SQL: [
        {
            question: "Which command is used to retrieve data from a database?",
            options: ["GET", "SELECT", "FETCH", "READ"],
            answer: "SELECT"
        },
        {
            question: "Which command is used to add new data?",
            options: ["ADD", "INSERT", "CREATE", "UPDATE"],
            answer: "INSERT"
        },
        {
            question: "Which command is used to remove data?",
            options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
            answer: "DELETE"
        },
        {
            question: "Which clause is used to filter records?",
            options: ["SORT", "WHERE", "FILTER", "GROUP"],
            answer: "WHERE"
        },
        {
            question: "Which command is used to modify existing data?",
            options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
            answer: "UPDATE"
        }
    ],


    "HTML/CSS": [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Management Language",
                "Home Tool Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which tag is used to create a paragraph?",
            options: ["<h1>", "<p>", "<div>", "<para>"],
            answer: "<p>"
        },
        {
            question: "Which CSS property changes text color?",
            options: ["font-color", "text-color", "color", "foreground"],
            answer: "color"
        },
        {
            question: "Which CSS property changes the background color?",
            options: ["background-color", "bg-color", "color-bg", "background"],
            answer: "background-color"
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: "<a>"
        }
    ]
};


/* ==========================================
   VARIABLES
========================================== */

let currentSkill = "";
let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];
let timer;
let timeLeft = 60;


/* ==========================================
   PAGE ELEMENTS
========================================== */

const homeSection = document.getElementById("home");
const skillsSection = document.getElementById("skills");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");


/* ==========================================
   SHOW SKILLS
========================================== */

function showSkills() {

    clearInterval(timer);

    homeSection.style.display = "none";
    quizSection.style.display = "none";
    resultSection.style.display = "none";

    skillsSection.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   START QUIZ
========================================== */

function startQuiz(skill) {

    currentSkill = skill;
    currentQuestion = 0;
    score = 0;

    selectedAnswers = new Array(
        questionData[skill].length
    ).fill(null);

    timeLeft = 60;

    homeSection.style.display = "none";
    skillsSection.style.display = "none";
    resultSection.style.display = "none";

    quizSection.style.display = "block";

    document.getElementById("quizSkill").textContent = skill;

    startTimer();

    displayQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   DISPLAY QUESTION
========================================== */

function displayQuestion() {

    const questions = questionData[currentSkill];

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent =
        question.question;


    /* Progress */

    const progressPercentage =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progress").style.width =
        progressPercentage + "%";


    /* Options */

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";


    question.options.forEach(function(option) {

        const optionElement =
            document.createElement("div");

        optionElement.classList.add("option");

        optionElement.textContent = option;


        /* Restore previous answer */

        if (selectedAnswers[currentQuestion] === option) {
            optionElement.classList.add("selected");
        }


        optionElement.onclick = function() {

            selectOption(optionElement, option);

        };


        optionsContainer.appendChild(optionElement);

    });


    /* Previous button */

    const previousButton =
        document.getElementById("previousBtn");

    if (currentQuestion === 0) {
        previousButton.style.visibility = "hidden";
    } else {
        previousButton.style.visibility = "visible";
    }


    /* Next button */

    const nextButton =
        document.getElementById("nextBtn");

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Submit Test ✓";
    } else {
        nextButton.textContent = "Next →";
    }
}


/* ==========================================
   SELECT OPTION
========================================== */

function selectOption(element, answer) {

    const allOptions =
        document.querySelectorAll(".option");

    allOptions.forEach(function(option) {
        option.classList.remove("selected");
    });

    element.classList.add("selected");

    selectedAnswers[currentQuestion] = answer;
}


/* ==========================================
   NEXT QUESTION
========================================== */

function nextQuestion() {

    const questions = questionData[currentSkill];


    /* Last question */

    if (currentQuestion === questions.length - 1) {

        submitQuiz();

        return;
    }


    currentQuestion++;

    displayQuestion();
}


/* ==========================================
   PREVIOUS QUESTION
========================================== */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion();
    }
}


/* ==========================================
   TIMER
========================================== */

function startTimer() {

    clearInterval(timer);

    updateTimer();


    timer = setInterval(function() {

        timeLeft--;

        updateTimer();


        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("Time is up! Your test will be submitted.");

            submitQuiz();
        }

    }, 1000);
}


/* ==========================================
   UPDATE TIMER DISPLAY
========================================== */

function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;


    const formattedMinutes =
        minutes.toString().padStart(2, "0");

    const formattedSeconds =
        seconds.toString().padStart(2, "0");


    document.getElementById("timer").textContent =
        `${formattedMinutes}:${formattedSeconds}`;


    /* Change timer appearance */

    const timerElement =
        document.querySelector(".timer");


    if (timeLeft <= 10) {

        timerElement.style.background = "#fecaca";
        timerElement.style.color = "#b91c1c";

    } else if (timeLeft <= 30) {

        timerElement.style.background = "#fef3c7";
        timerElement.style.color = "#b45309";

    } else {

        timerElement.style.background = "#fee2e2";
        timerElement.style.color = "#dc2626";
    }
}


/* ==========================================
   SUBMIT QUIZ
========================================== */

function submitQuiz() {

    clearInterval(timer);


    const questions =
        questionData[currentSkill];


    score = 0;


    /* Calculate score */

    questions.forEach(function(question, index) {

        if (
            selectedAnswers[index] ===
            question.answer
        ) {

            score++;

        }

    });


    showResult();
}


/* ==========================================
   SHOW RESULT
========================================== */

function showResult() {

    quizSection.style.display = "none";
    homeSection.style.display = "none";
    skillsSection.style.display = "none";

    resultSection.style.display = "flex";


    const totalQuestions =
        questionData[currentSkill].length;


    const wrongAnswers =
        totalQuestions - score;


    const percentage =
        Math.round((score / totalQuestions) * 100);


    /* Score */

    document.getElementById("score").textContent =
        score;


    /* Correct */

    document.getElementById("correctAnswers").textContent =
        score;


    /* Wrong */

    document.getElementById("wrongAnswers").textContent =
        wrongAnswers;


    /* Percentage */

    document.getElementById("percentage").textContent =
        percentage + "%";


    /* XP */

    const xp =
        score * 20;

    document.getElementById("xp").textContent =
        xp;


    /* Result message */

    let message = "";
    let resultText = "";


    if (percentage >= 80) {

        message = "Excellent Work! 🎉";

        resultText =
            "You have a strong understanding of this skill.";

    } else if (percentage >= 60) {

        message = "Good Job! 👍";

        resultText =
            "You are doing well. Keep practicing to improve.";

    } else if (percentage >= 40) {

        message = "Keep Practicing! 💪";

        resultText =
            "You have a good start. Practice more to improve.";

    } else {

        message = "Don't Give Up! 🌱";

        resultText =
            "Review the concepts and try the assessment again.";
    }


    document.getElementById("resultMessage").textContent =
        message;


    document.getElementById("resultText").textContent =
        resultText;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   INITIAL PAGE
========================================== */

window.onload = function() {

    homeSection.style.display = "flex";

    skillsSection.style.display = "block";

    quizSection.style.display = "none";

    resultSection.style.display = "none";

};