const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

const max = Math.max(...input);
const maxIndex = input.indexOf(max) + 1;
const result = max + '\n' + maxIndex;

console.log(result);