const fs = require('fs');
const [NM, ...arr] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
const result = Array.from({length: N}, (_, i) => i + 1);

for (let i = 0;  i < M; i++) {
  const [a, b] = arr[i].split(' ').map(n => parseInt(n) - 1);
  [result[a], result[b]] = [result[b], result[a]];
}

console.log(result.join(' '));