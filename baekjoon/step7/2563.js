const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1);

const paper = Array.from({length: 101}, () => Array.from({length: 101}, () => 0));

for (let i = 0; i < N; i++) {
  const [x, y] = arr[i].split(' ').map(Number);

  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      paper[j][k] = 1;
    }
  }
}

const result = paper.map((p) => p.reduce((acc, cur) => acc + cur)).reduce((acc, cur) => acc + cur);
console.log(result);