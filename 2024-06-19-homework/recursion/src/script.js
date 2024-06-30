function sumFrom1TillN(n) {
    console.log(`Called sumFrom1TillN(${n})`);
    if (n === 1) {
      console.log('Reached base case, returning 1');
      return 1;
    } else {
      const sum = n + sumFrom1TillN(n - 1);
      console.log(`Returning ${n} + sumFrom1TillN(${n - 1}) = ${sum}`);
      return sum;
    }
  }
  
  function calculateSum() {
    const input = document.getElementById('num');
    const result = document.querySelector('span');
    const n = parseInt(input.value);
    if (isNaN(n) || n < 1 || n > 10000) {
      result.textContent = 'Please enter a valid number between 1 and 10000.';
    } else {
      console.log(`Calculating sum from 1 to ${n}:`);
      const sum = sumFrom1TillN(n);
      console.log(`Sum from 1 to ${n} is ${sum}`);
      result.textContent = `Sum: ${sum}`;
    }
  }
  
  document.getElementById('num').addEventListener('input', calculateSum);
  