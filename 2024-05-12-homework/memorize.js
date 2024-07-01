const itemsToMemorize = ['Apple', 'Banana', 'Cherry', 'Date', 'StrawBerry'];
const numIterations = 1; 

function memorizeOrder() {
    for (let i = 0; i < numIterations; i++) {
        for (let j = 0; j < itemsToMemorize.length; j++) {
            let correctAnswer = false;
            while (!correctAnswer) {
                const userAnswer = prompt(`What is the item at number ${j + 1}?`).trim().toLowerCase();
                if (userAnswer === itemsToMemorize[j].toLowerCase()) {
                    correctAnswer = true;
                    console.log('Correct!');
                } else {
                    console.log('Incorrect. Please try again.');
                }
            }
        }
    }
    console.log('Congratulations! You have memorized the order.');
    alert('Congratulations! You have memorized the order.');
}

memorizeOrder();