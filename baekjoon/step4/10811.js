const fs = require('fs');
const [NM, ...arr] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
const result = Array.from({length: N}, (_, i) => i + 1);

for (let i = 0;  i < M; i++) {
  const [a, b] = arr[i].split(' ').map(n => parseInt(n) - 1).sort((a, b) => a - b);
  const reverseArr = result.slice(a, b + 1).reverse();
  result.splice(a, reverseArr.length, ...reverseArr);
}

console.log(result.join(' '));