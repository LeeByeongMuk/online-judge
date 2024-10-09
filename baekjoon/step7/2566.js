const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(n => n.split(' '));

let max = 0;
let position = '';

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    const cur = Number(input[i][j]);
    if (cur >= max) {
      max = cur;
      position = `${i + 1} ${j + 1}`;
    }
  }
}

const result = `${max}\n${position}`;
console.log(result);
