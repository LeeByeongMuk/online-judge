const fs = require('fs');
const [a, b, c] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const result = [
  (a + b) % c,
  ((a % c) + (b % c)) % c,
  (a * b) % c,
  ((a % c) * (b % c)) % c,
];

console.log(result.join('\n'));