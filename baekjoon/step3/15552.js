const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const N = parseInt(input[0]);
let result = '';

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(' ');
  const str = parseInt(a) + parseInt(b) + '\n';
  result += str;
}

console.log(result);

