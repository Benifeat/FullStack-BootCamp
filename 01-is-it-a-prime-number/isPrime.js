 // Get DOM elements
const numberInput = document.getElementById('numberInput');
const checkBtn = document.getElementById('checkBtn');
const resultDiv = document.getElementById('result');
 // Function to check if a number is prime
 function isPrime(n) {
    // Handle cases where n is less than 2 (not prime)
    if (n < 2) {
        return false;
    }
    // 2 is a prime number
    if (n === 2) {
        return true;
    }
    // Even numbers greater than 2 are not prime
    if (n % 2 === 0) {
        return false;
    }
    // Calculate the square root of n for optimization
    const sqrt = Math.sqrt(n);
    // Check odd numbers from 3 to the square root of n
    for (let i = 3; i <= sqrt; i += 2) {
        // If n is divisible by any odd number, it's not prime
        if (n % i === 0) {
            return false;
        }
    }
    // If no divisor is found, n is prime
    return true;
}

// Add event listener to the button
checkBtn.addEventListener('click', function() {
    // Get the user's input and convert it to a number
    const num = Number(numberInput.value);
    // Check if the input is valid (not NaN and greater than or equal to 2)
    if (isNaN(num) || num < 2 || !(Number.isInteger(num))) {
        resultDiv.innerText = 'ERROR input';
    } else {
        // Call the isPrime function with the user's input
        const isPrimeNumber = isPrime(num);
        // Display the result based on the return value of isPrime
        resultDiv.innerText = isPrimeNumber ? `${num} is a prime number` : `${num} is not a prime number`;
    }
});