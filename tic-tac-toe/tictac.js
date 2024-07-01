const x = document.getElementById('x');
const o = document.getElementById('o');

const squares = document.querySelectorAll('.squares');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleClick(index) {
    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        squares[index].textContent = currentPlayer;
        squares[index].classList.add(currentPlayer.toLowerCase());
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        let lastplayer = currentPlayer;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            combination.forEach(index => {
                squares[index].classList.add('winning-square');
            });
            setTimeout(() => {
                alert(`${lastplayer} wins!`);
                
                resetGame();
            }, 1000);
            return;
        }
    }

    if (!gameBoard.includes(''))  { 
     setTimeout(() => {
        alert("It's a tie!");
        resetGame();
    }, 1000); 
    }
}

function resetGame() {
    setTimeout(() => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('x', 'o', 'winning-square');
        });
        currentPlayer = 'X';
    }, 1000); 
    squares.classList.add('backToC');
}

squares.forEach((square, index) => {
    square.addEventListener('click', () => handleClick(index));
});
