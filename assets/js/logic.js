//Variables
const questionsDiv = document.getElementById("questions")
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start");
const endScreen = document.getElementById("end-screen");
const feedback = document.getElementById("feedback")
const finalScore = document.getElementById("final-score")
const initials = document.getElementById("initials")
const submitInitials = document.getElementById("submit")
const highScoresOl = document.getElementById("highscores");
const rightAnsAudio = new Audio("assets/sfx/correct.wav")
const wrongAnsAudio = new Audio("assets/sfx/incorrect.wav")

// Set initial timer in secs
let timer = document.getElementById("time");
let countdown = 60;

// Start the game
function startGame() {
    startBtn.addEventListener("click", () => {
        timer.textContent = countdown
        countdownTimer()
        displayQuestion()
    })
}
startGame()

// Countdown Timer
function countdownTimer() {
    let timeInterval = setInterval(() => {
        countdown--;
        timer.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(timeInterval);
            questionsDiv.classList.add("hide");
            endScreen.classList.remove("hide");
            finalScore.textContent = `${totalScore}`;
            timer.textContent = 0;
        }
    }, 1000);
}


// Update timer depending on answer
function updateTimer(){
    countdown -= 10
}

// Highscores to local Storage
function storeScores(){
    let initialsToStore = initials.value.toUpperCase().trim()
    let scoreToStore = totalScore;
    let userScores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    let newScore = {
        initials: initialsToStore,
        score: scoreToStore
    }
    userScores.push(newScore)
    localStorage.setItem('highscores', JSON.stringify(userScores));
}

// Event listener for button click to allow initials to be stored
submitInitials.addEventListener("click", (e) =>{
    e.preventDefault();
    storeScores()
    window.location.replace('highscores.html');
})
