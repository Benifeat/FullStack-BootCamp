const hexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const decimal = [];
const hexadecimal = [];

for (let i = 0; i <= 33; i++) {
  decimal.push(i);

  let hex = '';
  let num = i;

  while (num > 0) {
    const remainder = num % 16;
    hex = hexa[remainder] + hex;
    num = Math.floor(num / 16);
  }

  hexadecimal.push(hex || '0');
}

console.log('Decimal:\n', decimal.join(', '));
console.log('\nHexadecimal:\n', hexadecimal.join(', '));