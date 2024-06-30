// Get the size of the grid from the user
let gridSize = parseInt(prompt("1. press cancel to exit to window and open console\n2.refresh the website to pop prompt again ok lets play :D!\nEnter the size of the grid (e.g. 5 for a 5x5 grid):"));

// Get the player names
let playerX = prompt("Enter the name for the X player:");
let playerO = prompt("Enter the name for the O player:");

// Initialize the game board as a 2D array filled with null values
let gameBoard = [];
for (let i = 0; i < gridSize; i++) {
  gameBoard[i] = new Array(gridSize).fill(null);
}

// Track the current player (true for O, false for X)
let isPlayerO = false;

// Function to print the current state of the game board
function printGameBoard() {
  // Print the column numbers
  console.log(`   ${Array.from({ length: gridSize }, (_, i) => i + 1).join("   ")}`);

  // Print each row with the row number and symbols
  for (let i = 0; i < gridSize; i++) {
    console.log(`${i + 1} ${gameBoard[i].map(cell => cell === null ? "_" : cell).join("   ")}`);
  }

  console.log(" ");
}

// Function to check for a winning combination
function checkWin() {
  let winningSymbol = null;

  // Check rows
  for (let i = 0; i < gridSize; i++) {
    let row = new Set(gameBoard[i]);
    // If all cells in the row have the same non-null symbol, it's a win
    if (row.size === 1 && !row.has(null)) {
      winningSymbol = gameBoard[i][0];
      break;
    }
  }

  // Check columns
  if (!winningSymbol) {
    for (let j = 0; j < gridSize; j++) {
      let col = new Set();
      for (let i = 0; i < gridSize; i++) {
        col.add(gameBoard[i][j]);
      }
      // If all cells in the column have the same non-null symbol, it's a win
      if (col.size === 1 && !col.has(null)) {
        winningSymbol = gameBoard[0][j];
        break;
      }
    }
  }

  // Check diagonals
  if (!winningSymbol) {
    let diag1 = new Set();
    let diag2 = new Set();
    for (let i = 0; i < gridSize; i++) {
      diag1.add(gameBoard[i][i]);
      diag2.add(gameBoard[i][gridSize - 1 - i]);
    }
    // If all cells in either diagonal have the same non-null symbol, it's a win
    if ((diag1.size === 1 && !diag1.has(null)) || (diag2.size === 1 && !diag2.has(null))) {
      winningSymbol = diag1.size === 1 ? gameBoard[0][0] : gameBoard[0][gridSize - 1];
    }
  }

  return winningSymbol;
}

// Function to check for a tie
function checkTie() {
  // If all cells are filled and there's no winner, it's a tie
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (gameBoard[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}

// Function to reset the game board
function resetBoard() {
  for (let i = 0; i < gridSize; i++) {
    gameBoard[i] = new Array(gridSize).fill(null);
  }
  isPlayerO = false; // Reset the current player to X
}

// Print the initial game board
printGameBoard();

// Game loop
while (true) {
  // Get the move from the current player
  let move = prompt(`${isPlayerO ? playerO : playerX}, enter a coordinate (e.g. 2,3):`);
  let [row, col] = move.split(",").map(Number);
  row--; // Adjust for 0-based indexing
  col--;

  // Check if the selected cell is already occupied
  if (gameBoard[row][col] !== null) {
    console.log("That spot is already taken, try again.");
    continue;
  }

  // Place the symbol on the game board
  gameBoard[row][col] = isPlayerO ? "O" : "X";

  // Print the updated game board
  printGameBoard();

  // Check for a winner
  let winningSymbol = checkWin();
  if (winningSymbol) {
    alert(`${winningSymbol === "O" ? playerO : playerX} wins!`);
    resetBoard();
    printGameBoard();
  }
  // Check for a tie
  else if (checkTie()) {
    alert("It's a tie!");
    resetBoard();
    printGameBoard();
  }

  // Switch to the next player
  isPlayerO = !isPlayerO;
}