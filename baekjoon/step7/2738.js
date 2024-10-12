const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const resultArr = Array.from({length: N}, () => Array.from({length: M}, () => 0));

for (let i = 0; i < input.length; i++) {
  const atom = input[i].split(' ');
  const order = i % N;

  for (let j = 0; j < M; j++) {
    resultArr[order][j] += parseInt(atom[j]);
  }
}

const result = resultArr.map(a => a.join(' ')).join('\n');
console.log(result);