// Game variables
let sticks = [];
let currentSum = 0;
let currentPlayer = 1;
let gameMode = '';
let totalSticks = 100;

// DOM elements
const playerVsPlayerBtn = document.getElementById('player-vs-player');
const playerVsPCBtn = document.getElementById('player-vs-pc');
const numSticksInput = document.getElementById('num-sticks');
const stickCountElement = document.getElementById('stick-count');
const rulesButton = document.getElementById('rules-button');
const rulesPopup = document.getElementById('rules-popup');
const closeRulesButton = document.getElementById('close-rules');
const gameBoard = document.getElementById('game-board');
const stickInput = document.getElementById('stick-input');
const takeSticksBtn = document.getElementById('take-sticks');
const playerTurnElement = document.getElementById('player-turn');

// Event listeners
playerVsPlayerBtn.addEventListener('click', () => {
  gameMode = 'pvp';
  totalSticks = parseInt(numSticksInput.value);
  stickCountElement.textContent = totalSticks;
  startGame();
});

playerVsPCBtn.addEventListener('click', () => {
  gameMode = 'pvpc';
  totalSticks = parseInt(numSticksInput.value);
  stickCountElement.textContent = totalSticks;
  startGame();
});

rulesButton.addEventListener('click', showRules);
closeRulesButton.addEventListener('click', hideRules);

takeSticksBtn.addEventListener('click', takeSticks);

// Start the game
function startGame() {
  const modeSelection = document.getElementById('mode-selection');
  const gameScreen = document.getElementById('game-screen');
  modeSelection.style.display = 'none';
  gameScreen.classList.add('show');
  currentSum = 0;
  currentPlayer = 1;
  stickInput.value = '';
  gameBoard.innerHTML = '';
  sticks = [];
  createSticks();
  updatePlayerTurn();

  // Enable player input and button
  stickInput.disabled = false;
  takeSticksBtn.disabled = false;
}

// Create sticks on the game board
function createSticks() {
  for (let i = 0; i < totalSticks; i++) {
    const stick = document.createElement('div');
    stick.classList.add('stick');
    stick.style.left = `${Math.random() * 380}px`;
    stick.style.top = `${Math.random() * 280}px`;
    stick.style.transform = `rotate(${Math.random() * 360}deg)`;
    gameBoard.appendChild(stick);
    sticks.push(stick);
  }
}

// Take sticks from the pile
function takeSticks() {
  const numSticks = parseInt(stickInput.value);
  if (numSticks >= 1 && numSticks <= 9) {
    if (numSticks > sticks.length) {
      showErrorMessage("Not enough sticks available.");
      return;
    }

    currentSum += numSticks;
    removeSticks(numSticks);
    stickInput.value = '';
    clearErrorMessage();

    if (currentSum >= totalSticks) {
      endGame();
      return;
    }

    if (gameMode === 'pvp') {
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      updatePlayerTurn();
    } else if (gameMode === 'pvpc' && currentPlayer === 1) {
      currentPlayer = 2;
      updateComputerTurn();
      setTimeout(pcTurn, 1000);
    }
  } else {
    showErrorMessage("Please enter a number between 1 and 9.");
  }
}

// Remove sticks from the game board
function removeSticks(numSticks) {
  for (let i = 0; i < numSticks; i++) {
    if (sticks.length > 0) {
      const stick = sticks.pop();
      const alienShip = createAlienShip();
      animateAlienShip(alienShip, stick);
    }
  }
}

// Create an alien ship
function createAlienShip() {
  const alienShip = document.createElement('div');
  alienShip.classList.add('alien-ship');
  alienShip.style.left = `${Math.random() * 380}px`;
  alienShip.style.top = '300px';
  gameBoard.appendChild(alienShip);
  return alienShip;
}

// Animate the alien ship
function animateAlienShip(alienShip, stick) {
  const offsetX = stick.offsetLeft - alienShip.offsetLeft;
  const offsetY = stick.offsetTop - alienShip.offsetTop;
  alienShip.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

  setTimeout(() => {
    stick.remove();
    alienShip.remove();
  }, 2850);
}

// Computer's turn
function pcTurn() {
  // Disable player input and button
  stickInput.disabled = true;
  takeSticksBtn.disabled = true;

  const remainingSticks = totalSticks - currentSum;
  let numSticks;

  if (remainingSticks <= 9) {
    numSticks = remainingSticks;
  } else {
    numSticks = remainingSticks % 10;
    if (numSticks === 0) {
      numSticks = Math.floor(Math.random() * 9) + 1;
    }
  }

  if (numSticks > sticks.length) {
    numSticks = sticks.length;
  }

  setTimeout(() => {
    currentSum += numSticks;
    removeSticks(numSticks);

    if (currentSum >= totalSticks) {
      endGame();
      return;
    }

    currentPlayer = 1;
    updatePlayerTurn();

    // Enable player input and button
    stickInput.disabled = false;
    takeSticksBtn.disabled = false;
  }, 3000); // Delay of 2 seconds before the PC makes its move
}

// End the game
function endGame() {
  let winner;
  if (gameMode === 'pvpc') {
    if (currentPlayer === 1) {
      winner = 'player';
    } else {
      winner = 'Computer';
    }
  } else {
    winner = `Player ${currentPlayer}`;
  }
  showWinnerAnnouncement(`${winner} wins!`);
  startRestartTimer();
  setTimeout(() => {
    hideWinnerAnnouncement();
    gameScreen.classList.remove('show');
    modeSelection.style.display = 'block';
  }, 22000);
}
// Show the winner announcement
function showWinnerAnnouncement(message) {
  const winnerAnnouncement = document.getElementById('winner-announcement');
  const winnerMessage = document.getElementById('winner-message');
  winnerMessage.innerHTML = `<span class="fast-flicker">${message}</span>`;
  winnerAnnouncement.classList.remove('hidden');
}

// Hide the winner announcement
function hideWinnerAnnouncement() {
  const winnerAnnouncement = document.getElementById('winner-announcement');
  winnerAnnouncement.classList.add('hidden');
}

// Show an error message
function showErrorMessage(message) {
  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
}

// Clear the error message
function clearErrorMessage() {
  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = '';
}

// Update the player turn display
function updatePlayerTurn() {
  if (gameMode === 'pvp') {
    playerTurnElement.textContent = `Player ${currentPlayer}'s turn`;
  } else if (gameMode === 'pvpc') {
    if (currentPlayer === 1) {
      playerTurnElement.textContent = "Player's turn";
    } else {
      playerTurnElement.textContent = "Computer's turn";
    }
  }
}

// Update the computer turn display
function updateComputerTurn() {
  playerTurnElement.textContent = "Computer's turn";
}

// Start the restart timer
function startRestartTimer() {
  const restartTimer = document.getElementById('restart-timer');
  let countdown = 20;
  const timerInterval = setInterval(() => {
    restartTimer.textContent = `Restarting in ${countdown} seconds...`;
    countdown--;
    if (countdown < 0) {
      clearInterval(timerInterval);
      window.location.reload();
    }
  }, 1000);
}

// Show the rules popup
function showRules() {
  rulesPopup.classList.remove('hidden');
}

// Hide the rules popup
function hideRules() {
  rulesPopup.classList.add('hidden');
}