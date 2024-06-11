const fs = require('fs');
const input = parseInt(fs.readFileSync(0, 'utf-8').toString().trim());

function solution(n) {
  const arr = Array.from({length: 9}, (_, i) => i + 1);
  arr.forEach(i => console.log(getStr(n, i)));
}

function getStr (n, i) {
  const x = n * i;
  return `${n} * ${i} = ${x}`;
}

solution(input);