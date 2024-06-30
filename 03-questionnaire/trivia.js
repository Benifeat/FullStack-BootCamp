//animal generated questions
const animalQuestions = [
    {
        question: 'Does an elephant get frightened by mice?',
        options: ['Yes', 'Sometimes', 'Only in the Zoo', 'No'],
        answer: 0
    },
    {
        question: 'Which animal has 2 legs?',
        options: ['Kangaroo', 'Shark', 'Spider', 'Cat'],
        answer: 0
    },
    {
        question: 'What is the fastest land animal?',
        options: ['Cheetah', 'Lion', 'Elephant', 'Giraffe'],
        answer: 0
    }
];
//math generated questions
const mathQuestions = [
    {
        question: 'What is 2 + 2?',
        options: ['a) 3', 'b) 7', 'c) 2', 'd) 4'],
        answer: 3
    },
    {
        question: 'What is 10 x 5?',
        options: ['a) 40', 'b) 50', 'c) 60', 'd) 70'],
        answer: 1
    },
    {
        question: 'What is the square root of 144?',
        options: ['a) 9', 'b) 12', 'c) 16', 'd) 20'],
        answer: 1
    }
];
//food generated questions
const foodQuestions = [
    {
        question: 'Which of these is a fruit?',
        options: ['a) Carrot', 'b) Apple', 'c) Broccoli', 'd) Potato'],
        answer: 1
    },
    {
        question: 'Which of these is a dairy product?',
        options: ['a) Bread', 'b) Cheese', 'c) Rice', 'd) Lettuce'],
        answer: 1
    },
    {
        question: 'What is the main ingredient in pizza dough?',
        options: ['a) Flour', 'b) Sugar', 'c) Eggs', 'd) Salt'],
        answer: 0
    }
];

const questionContainer = document.querySelector('.question-container');
const categoryName = document.querySelector('.category-name');
const questionText = document.querySelector('.question-text');
const answerOptions = document.querySelector('.answer-options');
const categoryButtons = document.querySelectorAll('.category-btn');
const timerBar = document.querySelector('.timer-bar');
const scoreDisplay = document.querySelector('.score-display');
const skipBtn = document.querySelector('.skip-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');


let currentQuestionSet;
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;


// Start game function getting question array of objects and category

function startGame(questionSet, category) {
    currentQuestionSet = questionSet;
    questionContainer.style.display = 'flex';
    categoryName.textContent = `Category: ${category}`;
    categoryButtons.forEach(btn => btn.style.display = 'none');
    currentQuestionIndex = 0;
    score = 0;
    updateScoreDisplay();
    displayQuestion();
    startTimer();
}
//display questions by the question set picked 
function displayQuestion() {
    const currentQuestion = currentQuestionSet[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerOptions.innerHTML = '';
    // creating elements for the answers cathegorized by thier index
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('answer-option');
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        answerOptions.appendChild(optionElement);
    });
}

function handleAnswer(event) {
    const selectedOption = event.target;
    if (!selectedOption.classList.contains('answer-option')) return;

    const selectedIndex = selectedOption.dataset.index;
    const currentQuestion = currentQuestionSet[currentQuestionIndex];

    if (parseInt(selectedIndex) === currentQuestion.answer) {
        score += 10;//right answer
    } else {
        score -= 5;//wtong answer
        if (score < 0) {
            score = 0; //no negative points
        }
    }

    selectedOption.classList.add('selected');
    currentQuestionIndex++;
    updateScoreDisplay();

    if (currentQuestionIndex < currentQuestionSet.length) {
        displayQuestion();
        startTimer();
    } else {
        endGame();
    }
}

//
function startTimer() {
    timeLeft = 30;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerBar.style.width = `${(timeLeft / 30) * 100}%`;

        if (timeLeft <= 0) {
            handleAnswer();
        }
    }, 1000);
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
}
//end game output result of score and option of reseting the game 
function endGame() {
    clearInterval(timer);
    questionContainer.innerHTML = `
        <h2>Well Done!</h2>
        <p>Your score: ${score}</p>
        <button class="reset-btn">Restart Game</button>
    `;
    categoryButtons.forEach(btn => btn.style.display = 'inline-block');

    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', () => {
        window.location.href = 'trivia.html'; 
        questionContainer.style.display = 'none';
        categoryButtons.forEach(btn => btn.style.display = 'inline-block');
        currentQuestionIndex = 0;
        score = 0;
        updateScoreDisplay();
    });
}
//check which category chosen by click events
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        if (category === 'animals') {
            startGame(animalQuestions, 'Animals');
        } else if (category === 'math') {
            startGame(mathQuestions, 'Math');
        } else if (category === 'food') {
            startGame(foodQuestions, 'Food');
        }
    });
});

answerOptions.addEventListener('click', handleAnswer);

skipBtn.addEventListener('click', () => {
    currentQuestionIndex++; 
    displayQuestion(); 
});

stopBtn.addEventListener('click', () => {
    endGame(); 
});

