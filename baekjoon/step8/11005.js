const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

const N = input[0];
const B = Number(input[1]);

function binaryConversion(N, B) {
  const result = [];
  let n = N;


  while (n > 0) {
    const remainder = n % B;

    if (remainder > 9) {
      const code = String.fromCharCode(remainder + 55);
      result.unshift(code);
    } else {
      result.unshift(remainder);
    }

    n = Math.floor(n / B);
  }

  return result.join('');
}

const result = binaryConversion(N, B);
console.log(result);