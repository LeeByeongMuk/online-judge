const fs = require('fs');
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

function solution(n) {
  if (n % 4 === 0 && n % 100 !== 0) return 1;
  if (n % 400 === 0) return 1;
  return 0;
}

console.log(solution(input));