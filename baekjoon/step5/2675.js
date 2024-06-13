const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const T = parseInt(input[0]);
const arr = input.slice(1);
const result = [];

for (let i = 0; i < T; i++) {
  const [r, str] = arr[i].split(' ');
  const formatStr = str.split('').map(s => s.repeat(parseInt(r))).join('');
  result.push(formatStr);
}

console.log(result.join('\n'));