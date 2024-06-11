const fs = require('fs');
const [_, ...b] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const input = b.map(s => s.split(' ').map(Number));

function solution(arr) {
  arr.forEach(([a, b]) => console.log(a + b));
}

solution(input);