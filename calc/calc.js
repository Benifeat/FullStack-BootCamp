const buttons = document.getElementById('buttons');
const input = document.getElementById('input');
const output = document.getElementById('output');

let lastResult = '';
let currentBase = 10;

buttons.addEventListener('click', handleButtonClick);
document.addEventListener('keydown', handleKeyDown);
//handle event when button is clicked
function handleButtonClick(event) {
  const buttonKey = event.target.getAttribute('data-key');
  if (buttonKey) {
    handleInput(buttonKey);
  }
}
//handle event when keyboard is pressed
function handleKeyDown(event) {
  const key = event.keyCode.toString();
  handleInput(key);
}
//all button inputs
function handleInput(key) {
  switch (key) {
    case '27': 
      input.textContent = '';
      output.textContent = '0';
      lastResult = '';
      currentBase = 10;
      break;
    case '8': 
      input.textContent = input.textContent.slice(0, -1);
      break;
    case '13': 
      calculate();
      break;
    case '96': 
    case '97': 
    case '98': 
    case '99': 
    case '100': 
    case '101': 
    case '102': 
    case '103': 
    case '104': 
    case '105': 
    case '110': 
    case '107': 
    case '109': 
    case '106': 
    case '111': 
      input.textContent += event.target.textContent;
      break;
    case '53': 
      handlePercentage();
      break;
    case '80': 
      input.textContent += '^';
      break;
    case '82': 
      input.textContent = `√(${input.textContent})`;
      break;
    case '70': 
      input.textContent += '!';
      break;
    case '77':
      input.textContent += '%';
      break;
    case '66': 
      calculateAndConvert(2);
      break;
    case '68': 
      calculateAndConvert(10);
      break;
    case '72': 
      calculateAndConvert(16);
      break;
    default:
      break;
  }
}
//calculate percentage 
function handlePercentage() {
  const expression = input.textContent;
  const lastOperatorIndex = Math.max(
    expression.lastIndexOf('+'),
    expression.lastIndexOf('-'),
    expression.lastIndexOf('*'),
    expression.lastIndexOf('/')
  );

  if (lastOperatorIndex !== -1) {
    const lastNumber = expression.slice(lastOperatorIndex + 1);
    const percentageValue = parseFloat(lastNumber) / 100;
    input.textContent =
      expression.slice(0, lastOperatorIndex + 1) + percentageValue;
  } else {
    const percentageValue = parseFloat(expression) / 100;
    input.textContent = percentageValue.toString();
  }
}

function calculate() {
  try {
    const expression = input.textContent
      .replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)')
      .replace(/(\d+)!/g, 'factorial($1)')
      .replace(/\^/g, '**');
    const result = eval(expression);
    output.textContent = Number.isInteger(result) ? result : result.toFixed(3);
    lastResult = output.textContent;
    currentBase = 10;
  } catch (error) {
    output.textContent = 'Error';
  }
}
//calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
//calculate and convert
function calculateAndConvert(base) {
  calculate();
  convertBase(base);
}
//convert base
function convertBase(base) {
  if (lastResult === '') {
    output.textContent = 'No result to convert';
    return;
  }

  const decimal = parseFloat(lastResult);
  let converted;
  if (base === 2) {
    converted = decimal.toString(2);
  } else if (base === 10) {
    converted = decimal.toString(10);
  } else if (base === 16) {
    converted = decimal.toString(16).toUpperCase();
  }
  output.textContent = converted;
  currentBase = base;
}