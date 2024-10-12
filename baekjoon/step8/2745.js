const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

const B = input[0].split('').reverse();
const N = Number(input[1]);

function binaryConversion(str, binary, idx) {
  const code = str.charCodeAt(0);
  const digits = binary ** idx;

  if (code >= 65 && code <= 90) {
    return (code - 55) * digits;
  } else {
    return Number(str) * digits;
  }
}

const result = B.reduce((acc, cur, i) => acc + binaryConversion(cur, N, i), 0);
console.log(result);