
//  a
let action;
const userInput = prompt("Choose (Y/N)").toUpperCase();
action = userInput === "Y" ? "do it!" : "don't do it!"; 
console.log(`${action}`);




// // b 
// const cleanT = prompt("Do you have a clean T-shirt? (Yes/No)").toLowerCase();
// cleanT === "yes" ? alert("Wear it") : alert("Go do laundry");



// c+d
const answer = prompt("What is your answer? (Yes/No)").toLowerCase();
const validity = answer === "yes" || answer === "no" ? "valid answer" : "invalid answer";
console.log(validity);


// e

const num = prompt("Enter a number:");
const evenOdd = num % 2 === 0 ? "even" : "odd";
console.log(`The number ${num} is ${evenOdd}.`);


// f 
const input = prompt("pick one choice: red, green, blue, sweet, sour").toLowerCase();
const feedback = ["red", "green", "blue", "sweet", "sour"].includes(input)? "good choice" : "no such option";
console.log(feedback);

// Ternary + Dom

const adminPassword = 'Rxjel$#1hs';
const admin1 = "Yosi", admin2 = "Noa", admin3 = "Yael";
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const wordInput = document.getElementById('word');
const messageDiv = document.getElementById('message');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const num3Input = document.getElementById('num3');
const messageDiv2 = document.getElementById('message2');


submitButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const isAdmin = (username === admin1 || username === admin2 || username === admin3) && password === adminPassword;
    isAdmin ? alert("You're redirected to the admin area") :alert("Access denied");

});


wordInput.addEventListener('input', () => {
    const word = wordInput.value;
    const isUpperCase = word === word.toUpperCase();
    const message = isUpperCase ? "OK" : "Not in uppercase";
    messageDiv.textContent = message;

});

const updateMessage = () => {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    const num3 = Number(num3Input.value);

    const isPositive = num1 >= 0 && num2 >= 0 && num3 >= 0;
    const message2 = isPositive ? "The product will be positive" : "The product will be negative";
    messageDiv2.textContent = message2;
};

num1Input.addEventListener('input', updateMessage);
num2Input.addEventListener('input', updateMessage);
num3Input.addEventListener('input', updateMessage);


// Dom + Loops


const numberInput = document.getElementById('number');
const sumDiv = document.getElementById('sum');

const calculateSum = () => {
    const num = Number(numberInput.value);
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    sumDiv.textContent = `The sum of numbers from 1 to ${num} is: ${sum}`;
};

numberInput.addEventListener('input', calculateSum);


const numberInput2 = document.getElementById('number2');
const multDiv = document.getElementById('mult');

const calculateProduct = () => {
    const num = Number(numberInput2.value);
    let mult = 1;
    if(num>=0){
    for (let i = 1; i <= num; i++) {
        mult *= i;
    }
    multDiv.textContent = `The product of numbers from 1 to ${num} is: ${mult}`;
    }
    else{
        for (let i = -1; i >= num; i--) {
            mult *= i;
        }
    multDiv.textContent = `The product of numbers from -1 to ${num} is: ${mult}`;
    }
    const isNegative = mult < 0;
    multDiv.style.color = isNegative ? 'pink' : 'limegreen';
    if(num === 0){
    multDiv.textContent = `The product of numbers from 1 to ${num} is: 0`;
    }
};

numberInput2.addEventListener('input', calculateProduct);

// c + d 
const startInput = document.getElementById('start');
const endInput = document.getElementById('end');
const betweenDiv = document.getElementById('between');
const jumpInput = document.getElementById('jump');

const generateNumberList = () => {
    const start = Number(startInput.value);
    const end = Number(endInput.value);
    const jump = Number(jumpInput.value);
    let numbers = [];
    if(jump <=0 ){
        return alert("you cant do negative jumps nor zero");
    }
    if(start < end){
    for (let i = start; i <= end; i+=jump) {
        numbers.push(i);
        }
    }
    else{
        for (let i = start; i >= end; i-=jump) {
            numbers.push(i);
            } 
    }
    const numberList = numbers.join(', ');
    const startLow = start < end;
    betweenDiv.textContent = numberList;
    betweenDiv.style.color = startLow ? 'violet' : 'yellow';
};
startInput.addEventListener('input', generateNumberList);
endInput.addEventListener('input', generateNumberList);
jumpInput.addEventListener('input', generateNumberList);