const fs = require('fs');
const [NM, ...arr] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
const result = Array(N).fill(0);

for (let i = 0;  i < M; i++) {
  const [s, e, num] = arr[i].split(' ').map(Number);

  for (let j = s - 1; j < e; j++) {
    result[j] = num;
  }
}

console.log(result.join(' '));