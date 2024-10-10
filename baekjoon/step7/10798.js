const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(s => s.split(''));

const col = 15;
const row = 5;

let result = '';
for (let i = 0; i < col; i++) {
  for (let j = 0; j < row; j++) {
    const cur = input[j]?.[i];
    if (cur) result += cur;
  }
}

console.log(result);
