// mode 1 machine numbers
const maxNumber = 100;
let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
let trysLeft = Math.ceil(Math.log2(maxNumber));
// mode 1 click counter
let clicksCounterMode1 = 1;
//outputs mode 1
const trysLeftText = document.querySelector(".trysLeft");
const steps = document.querySelector(".steps");
const score = document.querySelector(".scoreis");
const guessTheNumber = document.querySelector(".numberis");
const outputValue = document.querySelector(".outputvalue");
//input mode 1
const input = document.querySelector(".inputvalue");
//nav buttons
const buttonMode1 = document.querySelector(".btn-mode1");
const buttonMode2 = document.querySelector(".btn-mode2");
const buttonMode3 = document.querySelector(".btn-mode3");
// nav targets for nav buttons
const targetElementMain = document.getElementById("root");
const targetElementMode1 = document.getElementById("mode1");
const targetElementMode2 = document.getElementById("mode2");
const targetElementMode3 = document.getElementById("mode3");
// buttons for mode 1
const buttonStart = document.querySelector(".btn-start");
const buttonExit = document.querySelector(".btn-exit");
const buttonReset = document.querySelector(".btn-reset");
const buttonCheck = document.querySelector(".btn-check");

//mode 1 buttons
buttonReset.addEventListener("click", () => {
  location.reload();
});

// nav buttons
buttonMode1.addEventListener("click", () => {
  targetElementMode1.scrollIntoView({ behavior: "smooth" });
});
buttonMode2.addEventListener("click", () => {
  targetElementMode2.scrollIntoView({ behavior: "smooth" });
});
buttonMode3.addEventListener("click", () => {
  targetElementMode3.scrollIntoView({ behavior: "smooth" });
});
buttonExit.addEventListener("click", () => {
  targetElementMain.scrollIntoView({ behavior: "smooth" });
});
buttonStart.addEventListener("click", startButtonMode1);
buttonCheck.addEventListener("click", inputCheckButtonMode1);
buttonCheck.addEventListener("click", trysCheckButtonMode1);
// mode 1 function for trys check
function trysCheckButtonMode1() {
  const inputPlayer = document.querySelector(".inputvalue").value;

  if (
    (isNaN(inputPlayer) && trysLeft == 1) ||
    (inputPlayer < 1 && trysLeft == 1) ||
    (inputPlayer > maxNumber && trysLeft == 1) ||
    (inputPlayer !== randomNumber && trysLeft == 1)
  ) {
    outputValue.innerText = "Last try";
    trysLeftText.innerText = trysLeft--;
  } else if (
    (isNaN(inputPlayer) && trysLeft == 0) ||
    (inputPlayer < 1 && trysLeft == 0) ||
    (inputPlayer > maxNumber && trysLeft == 0) ||
    (inputPlayer !== randomNumber && trysLeft == 0)
  ) {
    outputValue.innerText =
      "Game over! you used all your trys, the game will restart in 3 seconds!";
    buttonCheck.style.display = "none";
    trysLeftText.innerText = trysLeft--;
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else if (inputPlayer == randomNumber && trysLeft == 7) {
    document.querySelector(".numberis").innerText = randomNumber;
    document.querySelector(".numberis").style.visibility = "visible";
    document.querySelector(".guesscontainer").classList = "rotate-in-center";
    outputValue.innerText = "UNREAL! You Got it! From first try!";
    document.querySelector(".buttons-mode1").style.display = "none";

    setTimeout(() => {
      location.reload();
    }, 5000);
  } else {
    trysLeftText.innerText = trysLeft--;
  }
}
// mode 1 function for input check
function inputCheckButtonMode1() {
  const inputPlayer = document.querySelector(".inputvalue").value;
  let i = clicksCounterMode1++;
  if (isNaN(inputPlayer) || inputPlayer < 1 || inputPlayer > maxNumber) {
    outputValue.innerText = "Error: only number between 1 to 100";
  } else if (inputPlayer > randomNumber) {
    outputValue.innerText = inputPlayer + " > X";
    steps.innerText += ` № ${i} : ${inputPlayer}  > X, `;
  } else if (inputPlayer < randomNumber) {
    outputValue.innerText = inputPlayer + " < X";
    steps.innerText += ` № ${i} : ${inputPlayer}  < X, `;
  } else if (inputPlayer == randomNumber) {
    document.querySelector(".numberis").innerText = randomNumber;
    document.querySelector(".numberis").style.visibility = "visible";
    document.querySelector(".guesscontainer").style.backgroundColor = "green";
  }
}
// mode 1 function for start button
function startButtonMode1() {
  const inputPlayer = document.querySelector(".inputvalue").value;
  if (isNaN(inputPlayer) || inputPlayer < 1 || inputPlayer > maxNumber) {
    outputValue.innerText = "Error: only number between 1 to 100";
    score.innerText = "0";
    steps.innerText = "0";
  } else {
    inputCheckButtonMode1();
    trysCheckButtonMode1();
    buttonStart.style.display = "none";
    buttonCheck.style.display = "unset";
  }
}
//mode 1 value of random number in console log
console.log(randomNumber);
// outputs mode 2
let userNumber;
let min = 1;
let max = 100;

// Outputs mode 2
const pcOutput = document.querySelector(".pcGuesses");
const pcTrys = document.querySelector(".countOfTrys");
const winText = document.querySelector(".winText");

// Buttons mode 2
const buttonHigher = document.querySelector(".btn-higher");
const buttonLower = document.querySelector(".btn-lower");
const buttonCorrect = document.querySelector(".btn-correct");
const buttonExit2 = document.querySelector(".btn-exit-mode2");
const buttonResetMode2 = document.querySelector(".btn-reset2");

// PC guesses counter
let pcTrysCounter = 1;

// Event listeners mode 2
buttonExit2.addEventListener("click", () => {
  targetElementMain.scrollIntoView({ behavior: "smooth" });
});

buttonHigher.addEventListener("click", onClickHigher);
buttonLower.addEventListener("click", onClickLower);
buttonCorrect.addEventListener("click", onClickCorrect);
buttonResetMode2.addEventListener("click", resetMode2);

// Functions
function startMode2() {
  // Reset variables
  userNumber = null;
  min = 1;
  max = 100;
  pcTrysCounter = 1;
  pcTrys.innerText = pcTrysCounter;

  // Reset the guess container styles
  pcOutput.textContent = "";

  ComputerGuesses();
}

function ComputerGuesses() {
  const center = Math.floor((min + max) / 2);
  pcOutput.textContent = center;
}

function onClickHigher() {
  min = parseInt(pcOutput.textContent) + 1;
  ComputerGuesses();
  pcTrysCounter++;
  pcTrys.innerText = pcTrysCounter;

  checkWin();
}

function onClickLower() {
  max = parseInt(pcOutput.textContent) - 1;
  ComputerGuesses();
  pcTrysCounter++;
  pcTrys.innerText = pcTrysCounter;

  checkWin();
}

function onClickCorrect() {
  const guess = parseInt(pcOutput.textContent);
  if (userNumber === null) {
    userNumber = guess;
  }

  pcOutput.textContent = ` ${userNumber}`;
  document.querySelector(".guesscontainer-mode2").style.backgroundColor =
    "green";
  buttonHigher.disabled = true;
  buttonLower.disabled = true;
  buttonCorrect.disabled = true;

  checkWin();
}

function checkWin() {
  if (pcTrysCounter > 6) {
    pcOutput.innerText = "";
    winText.innerText = "YOU WIN!";
    setTimeout(() => {
      resetMode2();
    }, 3000);
  }
}

function resetMode2() {
  startMode2();
  winText.innerText = "";
  buttonHigher.disabled = false;
  buttonLower.disabled = false;
  buttonCorrect.disabled = false;
  document.querySelector(".guesscontainer-mode2").style.backgroundColor =
    "rgba(114, 114, 114, 0.5)";
}
startMode2();
