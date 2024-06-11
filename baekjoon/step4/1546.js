const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const maxScore = Math.max(...arr);

function getScore(n) {
  return n / maxScore * 100;
}

const result = arr.reduce((acc, cur) => acc + getScore(cur), 0) / N;

console.log(result);