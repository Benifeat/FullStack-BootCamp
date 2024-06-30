const btn0To1 = document.querySelector('.from0To1 button');
const out0To1 = document.querySelector('.from0To1 .out');

const btn0To10 = document.querySelector('.from0To10 button');
const out0To10 = document.querySelector('.from0To10 .out');

const btn1To5 = document.querySelector('.from1To5 button');
const out1To5 = document.querySelector('.from1To5 .out');

const btnColors = document.querySelector('.colors button');
const outColors = document.querySelector('.colors .out');

const btnArray = document.querySelector('.array button');
const outArray = document.querySelector('.array .out');

const ar = ['potato','shwarma','cruasan','falafel','pita'];
//               0       1          2       3        4
//   ar.length = 5

// from 0 till some number
const from0To = (tillNum) => {

    return Math.floor(Math.random() * (tillNum+1));

}

/************************ LISTENERS ************************/

btn0To1.addEventListener('click', () => {

    out0To1.innerText = Math.random().toFixed(4);

})

btn0To10.addEventListener('click', () => {

    out0To10.innerText = Math.floor(Math.random() * 11);

})

btn1To5.addEventListener('click', () => {

    out1To5.innerText = Math.floor(Math.random() * 5) + 1;

})

btnColors.addEventListener('click',() => {

    let colorStr = `rgb(${from0To(255)},${from0To(255)},${from0To(255)})`;
    outColors.innerText = colorStr;
    outColors.style.background = colorStr;


})

btnArray.addEventListener('click', () => {

    // random food from ar

    outArray.innerText = ar[Math.floor(Math.random() * ar.length)];

})




// random home work
const riddles = ['Who crossed the road?', 'What happens once in a year, twice in a week and never in a month?', 'What gets more wet as it dries?', 'What is at the end of the rainbow?', 'Which 4-letter word can be written forward, backward, upside-down and still be read from left to right?', 'Which invention let you look through the wall?', 'Which English letter has most water?'];
const answers = ['chicken', 'e', 'towel', 'w', 'NOON', 'window', 'c'];

const showRiddleBtn = document.querySelector('.riddle .show-riddle');
const riddleOutput = document.querySelector('.riddle .out');
const riddleInput = document.querySelector('.riddle input');

const checkAnswerBtn = document.querySelector('.answer .check-answer');
const answerOutput = document.querySelector('.answer .out');

showRiddleBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    riddleOutput.textContent = riddles[randomIndex];
    riddleInput.value = ''; // Clear the input field
});

checkAnswerBtn.addEventListener('click', () => {
    const userAnswer = riddleInput.value.trim().toLowerCase();
    const randomIndex = riddles.indexOf(riddleOutput.textContent);
    const correctAnswer = answers[randomIndex].toLowerCase();

    if (userAnswer === correctAnswer) {
        answerOutput.textContent = 'Correct!';
    } else {
        answerOutput.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
    }
});