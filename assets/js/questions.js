// Questions
const questions = [
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choices: [
            "1. var",
            "2. let",
            "3. Both A and B",
            "4. None of the above"
        ],
        correct: 3
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: [
            "1. Const",
            "2. var",
            "3. let",
            "4. constant"
        ],
        correct: 1
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: [
            "1. stringify()",
            "2. parse()",
            "3. convert()",
            "4. None of the above"
        ],
        correct: 1
    },
    {
        question: "Which object in Javascript doesn’t have a prototype?",
        choices: [
            "1. Base Object",
            "2. All objects have a prototype",
            "3. None of the objects have a prototype",
            "4. None of the above"
        ],
        correct: 1
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        choices: [
            "1. It is an ordered list of values",
            "2. It is an ordered list of objects",
            "3. It is an ordered list of string",
            "4. It is an ordered list of functions"
        ],
        correct: 1
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        choices: [
            "1. Function/Method",
            "2. Preprocessor",
            "3. Triggering Event",
            "4. RMI"
        ],
        correct: 1
    },
    {
        question: "Why JavaScript Engine is needed?",
        choices: [
            "1. Both Compiling & Interpreting the JavaScript",
            "2. Parsing the javascript",
            "3. Interpreting the JavaScript",
            "4. Compiling the JavaScript"
        ],
        correct: 3
    },
    {
        question: "Which of the following is the property that is triggered in response to JS errors?",
        choices: [
            "1. onclick",
            "2. onerror",
            "3. onmessage",
            "4. onexception"
        ],
        correct: 2
    },
    {
        question: "Which of the following is not an error in JavaScript?",
        choices: [
            "1. Missing of Bracket",
            "2. Division by zero",
            "3. Syntax error",
            "4. Missing of semicolons"
        ],
        correct: 2
    },
    {
        question: "Which among the following is not a property of the Location object?",
        choices: [
            "1. protocol",
            "2. host",
            "3. hostee",
            "4. hostname"
        ],
        correct: 3
    },
]

// Total score
let totalScore = 0

// Select a question from list
function displayQuestion(){
    let randomQuestion = Math.floor(Math.random() * questions.length)
    for (let i = 0; i < questions.length; i++) {
        const element = questions[randomQuestion];
        questionTitle.textContent = element.question
        choices.textContent = ""
        startScreen.classList.add("hide")
        questionsDiv.classList.remove("hide")
        element.choices.forEach((el) => {
            let choicesBtn = document.createElement("button")
            choices.appendChild(choicesBtn)
            choicesBtn.addEventListener("click", () => {
                setTimeout(() => {
                    displayQuestion()
                }, 1000)
                if (choicesBtn.innerText.includes(`${element.correct}`) === true) {
                    rightAnswer()
                }else {
                    wrongAnswer()
                }
            })
            choicesBtn.textContent = `${el}` 
        })
    }
    if (countdown <= 0) {
        questionsDiv.classList.add("hide")
    }
}

// Correct answer
function rightAnswer(){
    rightAnsAudio.play()
    feedback.classList.remove("hide")
    setTimeout(() => {
        feedback.classList.add("hide")
    }, 1000)
    feedback.textContent = "Correct"
    totalScore++
}

// Incorrect answer
function wrongAnswer(){
    wrongAnsAudio.play()
    feedback.classList.remove("hide")
    setTimeout(() => {
        feedback.classList.add("hide")
    }, 1000)
    feedback.textContent = "Incorrect"
    updateTimer()
}