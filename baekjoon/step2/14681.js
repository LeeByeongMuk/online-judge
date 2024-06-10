const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

function solution(x, y) {
  if (x > 0 && y > 0) return 1;
  else if (x < 0 && y > 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else return 4;
}

console.log(solution(a, b));